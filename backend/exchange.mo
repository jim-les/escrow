import Array "mo:base/Array";
import Principal "mo:base/Principal";
import Dex "canister:Dex";

actor {
    public func placeOrder(from: Dex.T.Token, fromAmount: Nat, to: Dex.T.Token, toAmount: Nat) : async Dex.T.OrderPlacementReceipt {
        await Dex.placeOrder(from, fromAmount, to, toAmount)
    };

    public func cancelOrder(order_id: Dex.T.OrderId) : async Dex.T.CancelOrderReceipt {
        await Dex.cancelOrder(order_id)
    };

    public func getOrder(order_id: Dex.T.OrderId) : async(?Dex.T.Order) {
        await Dex.getOrder(order_id)
    };

    public func getOrders() : async([Dex.T.Order]) {
        await Dex.getOrders()
    };

    public func withdraw(token: Dex.T.Token, amount: Nat, address: Principal) : async Dex.T.WithdrawReceipt {
        await Dex.withdraw(token, amount, address)
    };

    // ... similar functions for other operations ...
}
