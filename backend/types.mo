import Time "mo:base/Time";

// this module defines the types used in the  DEX canister

module {

    // token types i.e the coins which belong to the users
    public type Token = Principal;

    public type OrderId = Nat32;
  
  // order types which are used in the order book
    public type Order = {
        id: OrderId;
        owner: Principal;
        from: Token;
        fromAmount: Nat;
        to: Token;
        toAmount: Nat;
    };
    
    // ledger types which are used in the ledger book for the transactions
    // approve means to allow the spender to spend the tokens
    // mint means to create new tokens and add them to the total supply
    // transfer means to transfer tokens from one account to another
    public type Operation = {
        #approve;
        #mint;
        #transfer;
        #transferFrom;
    };

 
    public type TransactionStatus = {
        #succeeded;
        #failed;
    };

// transaction record types
    public type TxRecord = {
        caller: ?Principal;
        op: Operation; // operation type
        index: Nat; // transaction index
        from: Principal;
        to: Principal;
        amount: Nat;
        fee: Nat;
        timestamp: Time.Time;
        status: TransactionStatus;
    };

    // Dip20 token interface
    public type TxReceipt = {
        #Ok: Nat;
        #Err: {
            #InsufficientAllowance;
            #InsufficientBalance;
            #ErrorOperationStyle;
            #Unauthorized;
            #LedgerTrap;
            #ErrorTo;
            #Other;
            #BlockUsed;
            #AmountTooSmall;
        };
    };

    // metadata for the token
    public type Metadata = {
        logo : Text; // base64 encoded logo or logo url
        name : Text; // token name
        symbol : Text; // token symbol
        decimals : Nat8; // token decimal
        totalSupply : Nat; // token total supply
        owner : Principal; // token owner
        fee : Nat; // fee for update calls
    };


    // Dip20 token interface: defines the methods that a token should implement
    //DIP stands for Decentralized Identity and Permissions
    public type DIPInterface = actor {
        transfer : (Principal,Nat) ->  async TxReceipt;
        transferFrom : (Principal,Principal,Nat) -> async TxReceipt;
        allowance : (owner: Principal, spender: Principal) -> async Nat;
        getMetadata: () -> async Metadata;
    };

    // escrow interface: defines the methods that the escrow should implement
    //such as hold the coins sent by sellers, list them fo sale as ads
    //buyer can buy the ads send the payment to the escrow node and 
    //the escrow node will transfer the coins to the buyer and the payment to the seller
    public type EscrowInterface = actor {
        deposit : (Token, Nat) -> async DepositReceipt;
        withdraw : (Token, Nat) -> async WithdrawReceipt;
        getBalance : (Token) -> async Balance;
        placeOrder : (Token, Nat, Token, Nat) -> async OrderPlacementReceipt;
        cancelOrder : (OrderId) -> async CancelOrderReceipt;
        getOrders : (Token, Token) -> async [Order];
        getLedger : () -> async [TxRecord];
    };



    // return types both for the order book and the ledger
    // will use this to return the result of the operation and handle the errors effectively
    public type OrderPlacementErr = {
        #InvalidOrder;
        #OrderBookFull;
    };

    public type OrderPlacementReceipt = {
        #Ok: ?Order;
        #Err: OrderPlacementErr;
    };
    public type CancelOrderErr = {
        #NotExistingOrder;
        #NotAllowed;
    };
    public type CancelOrderReceipt = {
        #Ok: OrderId;
        #Err: CancelOrderErr;
    };
    public type WithdrawErr = {
        #BalanceLow;
        #TransferFailure;
    };
    public type WithdrawReceipt = {
        #Ok: Nat;
        #Err: WithdrawErr;  
    };
    public type DepositErr = {
        #BalanceLow;
        #TransferFailure;
    };
    public type DepositReceipt = {
        #Ok: Nat;
        #Err: DepositErr;
    };
    public type Balance = {
        owner: Principal;
        token: Token;
        amount: Nat;
    };

    // errors and return fo the escrow ledger
    public type LedgerErr = {
        #InsufficientBalance;
        #TransferFailure;
    };

    public type LedgerReceipt = {
        #Ok: Nat;
        #Err: LedgerErr;
    };

    public type Ledger = {
        owner: Principal;
        token: Token;
        amount: Nat;
    };

    // payment not sent
    public type PaymentNotSent = {
        #NotSent;
    };

}
