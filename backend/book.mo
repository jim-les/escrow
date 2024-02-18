import Array "mo:base/Array";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";


import M "mo:base/HashMap";

import T "types";

module {
    public class Book() {

        // Add an additional map to keep track of escrow transactions
        var book = M.HashMap<Principal, M.HashMap<T.Token, Nat>>(10, Principal.equal, Principal.hash);
        var escrowBook = M.HashMap<Principal, M.HashMap<T.Token, Nat>>(10, Principal.equal, Principal.hash);

        public func get(user: Principal) : ?M.HashMap<T.Token, Nat> {
            book.get(user)
        };

        // update the user balances
        public func put(user: Principal, userBalances: M.HashMap<T.Token, Nat>) {
            book.put(user, userBalances);
        };

        // Add a function to get escrow transactions for a user
        public func getEscrow(user: Principal) : ?M.HashMap<T.Token, Nat> {
            escrowBook.get(user)
        };

        // Add a function to put escrow transactions for a user
        public func putEscrow(user: Principal, userEscrow: M.HashMap<T.Token, Nat>) {
            escrowBook.put(user, userEscrow);
        };

        public func entries() : Iter.Iter<(Principal,M.HashMap<T.Token,Nat>)> {
            book.entries()
        };

        // For development only.
        public func print_balances(){
            for ((x, y) in book.entries()) {
                Debug.print( debug_show("PRINCIPAL: ", x));
                for ((key: T.Token, value: Nat) in y.entries()) {
                    Debug.print( debug_show("Balance: Token: ", key, " amount: ",value));
                };
            };
        };

        // Function to clear both regular and escrow books
        public func clear() {
            book := M.HashMap<Principal, M.HashMap<T.Token, Nat>>(10, Principal.equal, Principal.hash);
            escrowBook := M.HashMap<Principal, M.HashMap<T.Token, Nat>>(10, Principal.equal, Principal.hash);
        };

        // Function to add tokens to the regular book. Keeps track of users' deposits.
        public func addTokens(user: Principal, token: T.Token, amount: Nat){
            switch (book.get(user)) {
                case (?token_balance) {
                    // Check if the user already has an existing balance for this token
                    switch (token_balance.get(token)){
                        case (?balance) {
                            token_balance.put(token, balance+amount);
                        };
                        case(null){
                            token_balance.put(token, amount);
                        };
                    };
                };
                case (null) {
                    // User didn't exist
                    var x1 = M.HashMap<T.Token, Nat>(2, Principal.equal, Principal.hash);
                    x1.put(token,amount);
                    book.put(user,x1);
                };
            };
        };

        // Function to add tokens to the escrow book. Keeps track of escrow transactions.
        public func addEscrowTokens(user: Principal, token: T.Token, amount: Nat){
            switch (escrowBook.get(user)) {
                case (?token_balance) {
                    // Check if the user already has an existing balance for this token in escrow
                    switch (token_balance.get(token)){
                        case (?balance) {
                            token_balance.put(token, balance+amount);
                        };
                        case(null){
                            token_balance.put(token, amount);
                        };
                    };
                };
                case (null) {
                    // User didn't exist in escrow book
                    var x1 = M.HashMap<T.Token, Nat>(2, Principal.equal, Principal.hash);
                    x1.put(token,amount);
                    escrowBook.put(user,x1);
                };
            };
        };

        // Function to remove tokens from the regular book. Returns the new balance.
        public func removeTokens(user: Principal, token: T.Token, amount: Nat) : ?Nat {
            switch (book.get(user)) {
                case (?token_balance) {
                    // Check if the user already has an existing balance for this token
                    switch (token_balance.get(token)){
                        case (?balance) {
                          if (balance>=amount) {
                            if (balance==amount) {
                              token_balance.delete(token);
                            } else {
                              token_balance.put(token, balance-amount);
                            };
                            ?(balance-amount)
                          } else {
                            null
                            }
                        };
                        case(null){
                            Debug.print("User " # Principal.toText(user) # " has no balance of token " # Principal.toText(token));
                            null
                        };
                    };
                };
                case (null) {
                    // User didn't exist
                    Debug.print("User " # Principal.toText(user) # " doesn't exist in book, cannot remove tokens.");
                    null
                };
            };
        };

        // Function to remove tokens from the escrow book. Returns the new balance.
        public func removeEscrowTokens(user: Principal, token: T.Token, amount: Nat): ?Nat {
            switch (escrowBook.get(user)) {
                case (?token_balance) {
                    // Check if the user already has an existing balance for this token in escrow
                    switch (token_balance.get(token)){
                        case (?balance) {
                          if (balance>=amount) {
                            if (balance==amount) {
                              token_balance.delete(token);
                            } else {
                              token_balance.put(token, balance-amount);
                            };
                            let new_balance : ?Nat = ?(balance-amount);
                          } else {
                            null
                            }
                        };
                        case(null){
                            Debug.print("User " # Principal.toText(user) # " has no escrow balance of token " # Principal.toText(token));
                            null
                        };
                    };
                };
                case (null) {
                    // User didn't exist in escrow book
                    Debug.print("User " # Principal.toText(user) # " doesn't exist in escrow book, cannot remove escrow tokens.");
                    null
                };
            };
        };

        // Return true if a user has at least amount tokens in the regular book, false otherwise.
        public func hasEnoughBalance(user: Principal, token: T.Token, amount: Nat) : Bool {
            switch (book.get(user)) {
                case (?balances) {
                    switch(balances.get(token)) {
                        case (?balance) return balance >= amount;
                        case null return false;
                    }
                };
                case null return false;
            };
        };

        // Return true if a user has at least amount tokens in the escrow book, false otherwise.
        
        public func hasEnoughEscrowBalance(user: Principal, token: T.Token, amount: Nat) : Bool {
            switch (escrowBook.get(user)) {
                case (?balances) {
                    switch(balances.get(token)) {
                        case (?balance) return balance >= amount;
                        case null return false;
                    }
                };
                case null return false;
            };
        }
    }
}
