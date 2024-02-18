import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Debug "mo:base/Debug";
import Bool "mo:base/Debug";
import Float "mo:base/Float";
import Int "mo:base/Int";
import Int64 "mo:base/Int64";
import Iter "mo:base/Iter";
import M "mo:base/HashMap";
import Nat64 "mo:base/Nat64";
import Nat32 "mo:base/Nat32";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Result "mo:base/Result";


import B "book";
import E "exchange";
import T "types";

// Import the escrow system module

// Use the Escrow module for escrow-related functionalities
shared(init_msg) actor class Dex() = this {
    let ledger : Principal = Principal.fromActor(Ledger);
    let icp_fee: Nat = 10_000;

    stable var orders_stable : [T.Order] = [];
    stable var lastId : Nat32 = 0;
    var exchanges = M.HashMap<E.TradingPair, E.Exchange>(10, func (k1: E.TradingPair,k2: E.TradingPair): Bool {
        Principal.equal(k1.0,k2.0) and Principal.equal(k1.1,k2.1)
    }, func (k : E.TradingPair) {
        Text.hash(Text.concat(Principal.toText(k.0),Principal.toText(k.1)))
    });

    // User balance data structure using the Escrow module
    private var book = B.Book();
    private stable var book_stable : [var (Principal, [(T.Token, Nat)])] = [var];

    // ===== ORDER FUNCTIONS =====
    public shared(msg) func placeOrder(from: T.Token, fromAmount: Nat, to: T.Token, toAmount: Nat) : async T.OrderPlacementReceipt {
        let id = nextId();
        Debug.print("");
        Debug.print("Placing order "# Nat32.toText(id) #" from user " # Principal.toText(msg.caller) # " for selling " # Nat.toText(fromAmount) # " tokens " # Principal.toText(from));
        let owner=msg.caller;
        let submitted = Time.now();

        // construct trading pair
        var trading_pair=(from,to);
        switch(create_trading_pair(from,to)){
            case(?tp){
                trading_pair:=tp;
            };
            case(null){
                return #Err(#InvalidOrder);
            }
        };

        // Iterate all orders to only allow one sell order per token.
        for(e in exchanges.vals()) {
            for(o in e.getOrders().vals()){
                if (o.from == from and o.owner == owner ) {
                    return #Err(#OrderBookFull);
                };
            };
        };

        // Check if user balance in book is enough before creating the order.
        if(book.hasEnoughBalance(owner,from,fromAmount) == false) {
            Debug.print("Not enough balance for user " # Principal.toText(owner) # " in token " # Principal.toText(from));
            return #Err(#InvalidOrder);
        };

        let exchange = switch (exchanges.get(trading_pair)) {
            case null {
                Debug.print("Creating Exchange for trading pair: " # Principal.toText(trading_pair.0) # "::" # Principal.toText(trading_pair.1));
                let exchange : E.Exchange = E.Exchange(trading_pair, book);
                exchanges.put(trading_pair,exchange);
                exchange
            };
            case (?e) e
        };
        let order : T.Order = {
            id;
            owner;
            from;
            fromAmount;
            to;
            toAmount;
         };
        exchange.addOrder(Principal.fromActor(this), order);

        #Ok(exchange.getOrder(id))
    };

    public shared(msg) func cancelOrder(order_id: T.OrderId) : async T.CancelOrderReceipt {
        Debug.print("Cancelling order "# Nat32.toText(order_id) #"...");
        for(e in exchanges.vals()) {
            switch (e.getOrder(order_id)) {
                case (?order)
                    if(order.owner != msg.caller) {
                        return #Err(#NotAllowed);
                    } else {
                        switch (e.cancelOrder(order_id)) {
                            case (?canceled) return #Ok(canceled.id);
                            case null return #Err(#NotAllowed)
                        }
                    };
                case null {}
            };
        };
        return #Err(#NotExistingOrder);
    };

    public func getOrder(order_id: T.OrderId) : async(?T.Order) {
        Debug.print("Checking order "# Nat32.toText(order_id)#"...");
        for(e in exchanges.vals()) {
            switch (e.getOrder(order_id)) {
                case (?order) return ?order;
                case null {}
            };
        };
        null;
    };

    public func getOrders() : async([T.Order]) {
        Debug.print("List orders...");
        getAllOrders()
    };

    private func getAllOrders() : [T.Order] {
        let buff : Buffer.Buffer<T.Order> = Buffer.Buffer(10);
        for(e in exchanges.vals()) {
            for(o in e.getOrders().vals()) {
                buff.add(o);
            };
        };
        buff.toArray();
    };

    private func nextId() : Nat32 {
        lastId += 1;
        lastId;
    };

    // ===== WITHDRAW FUNCTIONS =====
    public shared(msg) func withdraw(token: T.Token, amount: Nat, address: Principal) : async T.WithdrawReceipt {
        // remove user submitted orders
        for (order in getAllOrders().vals()){
            if (order.owner == msg.caller){
                var trading_pair=(order.from,order.to);
                switch(create_trading_pair(order.from,order.to)){
                    case(?tp){
                        trading_pair:=tp;
                    };
                    case _ {};
                };
                switch (exchanges.get(trading_pair)) {
                    case (?e) {
                        let _ = e.cancelOrder(order.id);
                    };
                    case _ {};
                };
            }
        };

        if (token == ledger) {
            let account_id = Account.accountIdentifier(address, Account.defaultSubaccount());
            await Escrow.withdrawIcp(msg.caller, amount, account_id, this, book)
        } else {
            await Escrow.withdrawDip(msg.caller, token, amount, address, this, book)
        }
    };

    // ... (unchanged code)

    // !!!! UPGRADES ONLY USED FOR DEVELOPMENT !!!!
    // Defi apps are not upgradable and should have an empty controller list
    // https://internetcomputer.org/docs/current/concepts/trust-in-canisters
    // !!!! UPGRADES ONLY USED FOR DEVELOPMENT !!!!

    // Required since maps cannot be stable and need to be moved to stable memory
    // Before canister upgrade book hashmap gets stored in stable memory such that it survives updates
    system func preupgrade() {
        book_stable := Array.init(book.size(), (Principal.fromText(""), []));
        var i = 0;
        for ((x, y) in book.entries()) {
            book_stable[i] := (x, Iter.toArray(y.entries()));
            i += 1;
        };
        orders_stable := getAllOrders();
    };

    // After canister upgrade book map gets reconstructed from stable array
    system func postupgrade() {
        // Reload book.
        for ((key: Principal, value: [(T.Token, Nat)]) in book_stable.vals()) {
            let tmp: M.HashMap<T.Token, Nat> = M.fromIter<T.Token, Nat>(Iter.fromArray<(T.Token, Nat)>(value), 10, Principal.equal, Principal.hash);
            book.put(key, tmp);
        };

        // TODO Reload exchanges (find solution for async symbol retrieving).
        for(o in orders_stable.vals()) {
            let trading_pair = switch (create_trading_pair(o.from,o.to)){
                case null (o.from,o.to);
                case (?tp) tp;
            };
            let exchange = switch (exchanges.get(trading_pair)) {
                case null {
                    let exchange : E.Exchange = E.Exchange(trading_pair, book);
                    exchanges.put(trading_pair,exchange);
                    exchange
                };
                case (?e) e
            };
            exchange.addOrder(Principal.fromActor(this), o);
        };

        // Clean stable memory.
        book_stable := [var];
        orders_stable := [];
    };
};
