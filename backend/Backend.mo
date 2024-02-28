import Debug "mo:base/Debug";
import Error "mo:base/Error";
import Int "mo:base/Int";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Nat64 "mo:base/Nat64";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Blob "mo:base/Blob";
import Text "mo:base/Text";

import now "mo:base/Time";
import { setTimer; recurringTimer } "mo:base/Timer";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Result "mo:base/Result";
import Buffer "mo:base/Buffer";
import Nat "mo:base/Nat";

import Account "./account";
import Types "types";
import Utils "./utils";

actor Self {

  let AuctionInterval = 1200; // seconds
  let AuctionIntervalNanoseconds = 1_200_000_000_000;
  let e8s : Nat64 = 100000000;
  let MintetAccount = "278b012b6396eac3f959e62c258d989aea98b5112aceb09fbbc83edc3138966f";

  type Bid = Types.Bid;
  type Auction = Types.Auction;
  type BidRequest = Types.BidRequest;
  type BidId = Text;
  type AuctionId = Text;
  type Balance = Types.Balance;


  var bids = HashMap.HashMap<BidId, Bid>(0, Text.equal, Text.hash);
  private stable var bidEntries : [(BidId, Bid)] = [];

  var auctions = HashMap.HashMap<AuctionId, Auction>(0, Text.equal, Text.hash);
  private stable var auctionEntries : [(AuctionId, Auction)] = [];

  var auctionBids = HashMap.HashMap<AuctionId, List.List<BidId>>(0, Text.equal, Text.hash);
  private stable var auctionBidsEntries : [(AuctionId, List.List<BidId>)] = [];

  system func preupgrade() {
    bidEntries := Iter.toArray(bids.entries());
    auctionEntries := Iter.toArray(auctions.entries());
    auctionBidsEntries := Iter.toArray(auctionBids.entries());

  };

  system func postupgrade() {
    bids := HashMap.fromIter<BidId, Bid>(bidEntries.vals(), 0, Text.equal, Text.hash);
    auctions := HashMap.fromIter<AuctionId, Auction>(auctionEntries.vals(), 0, Text.equal, Text.hash);
    auctionBids := HashMap.fromIter<AuctionId, List.List<BidId>>(auctionBidsEntries.vals(), 0, Text.equal, Text.hash);
  };

  private func createAuction() : async () {
    // get current ongoing auctions
    let ongoingAuctions = Array.filter<Auction>(
      Iter.toArray(auctions.vals()),
      func _auction = switch (_auction.status) {
        case (#running) {
          true;
        };
        case (#ended) {
          false;
        };
      },
    );
    // end all ongoing auctions
    for (auction in ongoingAuctions.vals()) {
      let updatedAuction : Auction = {
        auction with
        status = #ended;
      };
      auctions.put(auction.id, updatedAuction);
    };

    // create new auction
    let uuid = Utils.generate_uuid();
    let currentTime = Time.now();
    let auction : Auction = {
      id = uuid;
      item = "item";
      startTime = currentTime;
      endTime = currentTime + AuctionIntervalNanoseconds;
      status = #running;
      highestBid = null;
    };
    auctions.put(uuid, auction);
  };

  // TODO: uncomment this, only for testing
  // ignore setTimer(
  //   #seconds(AuctionInterval),
  //   func() : async () {
  //     ignore recurringTimer(#seconds AuctionInterval, createAuction);
  //     await createAuction();
  //   },
  // );
  // TODO: remove this, only for testing
  public shared func startAuction() : async () {
    await createAuction();
  };

  public shared query func getAuctionBids(id : Text) : async [Bid] {
    var _bids : List.List<Text> = switch (auctionBids.get(id)) {
      case null {
        List.nil();
      };
      case (?bids) {
        bids;
      };
    };
    let idsArray = List.toArray(_bids);
    var bidsBuffer = Buffer.Buffer<Bid>(0);
    for (bidId in idsArray.vals()) {
      let _bid = bids.get(bidId);
      switch (_bid) {
        case (?bid) {
          bidsBuffer.add(bid);
        };
        case null {};
      };
    };

    return Buffer.toArray(bidsBuffer);
  };

  public shared query func getAuction(id : Text) : async ?Auction {
    auctions.get(id);
  };

  let LEDGER = actor "ryjl3-tyaaa-aaaaa-aaaba-cai" : actor {
    account_balance : shared query Types.BinaryAccountBalanceArgs -> async Types.Tokens;
    account_balance_dfx : shared query Types.AccountBalanceArgs -> async Types.Tokens;
    account_identifier : shared query Types.Account -> async Blob;
    query_blocks : shared query Types.GetBlocksArgs -> async Types.QueryBlocksResponse;
    query_encoded_blocks : shared query Types.GetBlocksArgs -> async Types.QueryEncodedBlocksResponse;
    send_dfx : shared Types.SendArgs -> async Nat64;
    symbol : shared query () -> async Types.Symbol;
    transfer : shared Types.TransferArgs -> async Types.Result_5;
    transfer_fee : shared query {} -> async Types.TransferFee;
  };

  public shared query func getOngoingAuction() : async Result.Result<Auction, Text> {
    let currentTime = Time.now();
    let ongoingAuctions = Array.filter<Auction>(
      Iter.toArray(auctions.vals()),
      func _auction = switch (_auction.status) {
        case (#running) {
          if (_auction.endTime > currentTime) {
            true;
          } else {
            let updatedAuction : Auction = {
              _auction with
              status = #ended;
            };
            auctions.put(_auction.id, updatedAuction);
            false;
          };
        };
        case (#ended) {
          false;
        };
      },
    );
    if (ongoingAuctions.size() > 0) {
      #ok(ongoingAuctions[0]);
    } else {
      #err("No ongoing auction");
    };
  };

  public shared query func getAllAuctions() : async [Auction] {
    Iter.toArray(auctions.vals());
  };

  // Bid on an auction
  public shared ({ caller }) func placeBid(args : BidRequest) : async Result.Result<Text, Text> {
    let newBidId = Utils.generate_uuid();
    let bidder = userAID(caller);
    let currentTime = Time.now();
    let newBid : Bid = {
      id = newBidId;
      bidderPrincipal = Principal.toText(caller);
      bidder = bidder;
      amount = args.amount * e8s;
      refunded = false;
      created = currentTime;
    };

    let auction = await getOngoingAuction();

    switch (auction) {
      case (#ok(auction)) {

        var auctionBidsIdsList : List.List<BidId> = switch (auctionBids.get(auction.id)) {
          case null {
            List.nil();
          };
          case (?ids) {
            ids;
          };
        };

        switch (auction.highestBid) {
          case (null) {
            let updatedAuction : Auction = {
              auction with
              highestBid = ?newBid;
            };
            auctions.put(auction.id, updatedAuction);
            auctionBidsIdsList := List.push(newBid.id, auctionBidsIdsList);
            auctionBids.put(auction.id, auctionBidsIdsList);
            bids.put(newBidId, newBid);
            return #ok("Bid placed successfully");
          };
          case (?highestBid) {
            if ((args.amount * e8s) <= highestBid.amount) {
              return #err("Bid amount is lower than current highest bid");
            } else {
              // Transfer ICP to the previous highest bidder account
              let transfereRes = await LEDGER.transfer({
                to = highestBid.bidder;
                fee = { e8s = 10_000 : Nat64 };
                memo = 0;
                from_subaccount = null;
                to_subaccount = null;
                created_at_time = null;
                amount = { e8s = highestBid.amount };
              });
              switch (transfereRes) {
                case (#Ok(_)) {
                  // Update the previous highest bidder's bid
                  let updatedHighestBid : Bid = {
                    highestBid with
                    refunded = true;
                  };
                  bids.put(highestBid.id, updatedHighestBid);

                  // Update auction and bids
                  let updatedAuction : Auction = {
                    auction with
                    highestBid = ?newBid;
                  };
                  auctions.put(auction.id, updatedAuction);
                  auctionBidsIdsList := List.push(newBid.id, auctionBidsIdsList);
                  auctionBids.put(auction.id, auctionBidsIdsList);
                  bids.put(newBidId, newBid);
                  return #ok("Bid placed successfully");
                };
                case (#Err(err)) {
                  return #err(transferError(err));
                };
              };

            };
          };
        };
      };
      case (#err(msg)) {
        #err("No ongoing auction");
      };
    };
  };

  func transferError(err : Types.TransferError_1) : Text {
    switch (err) {
      case (#BadFee(msg)) {
        "Bad fee: " # Nat64.toText(msg.expected_fee.e8s);
      };
      case (#InsufficientFunds(msg)) {
        "Insufficient funds: " # Nat64.toText(msg.balance.e8s);
      };
      case (#TxCreatedInFuture(msg)) {
        "Tx created in future: ";
      };
      case (#TxDuplicate(msg)) {
        "Tx Duplicate: " # Nat64.toText(msg.duplicate_of);
      };
      case (#TxTooOld(msg)) {
        "Tx expired: " # Nat64.toText(msg.allowed_window_nanos);
      };
    };
  };

  public shared ({ caller }) func getUserBalance() : async Balance {
    let callerAID = userAID(caller);
    let callerBalance = await LEDGER.account_balance({
      account = callerAID;
    });
    callerBalance;
  };

  public shared func getCanisterBalance() : async Balance {
    let canisterBalance = await LEDGER.account_balance({
      account = myAccountId();
    });
    canisterBalance;
  };

  // Returns the default account identifier of this canister.
  func myAccountId() : Account.AccountIdentifier {
    Account.accountIdentifier(Principal.fromActor(Self), Account.defaultSubaccount());
  };

  func userAID(id : Principal) : Account.AccountIdentifier {
    Account.accountIdentifier(id, Account.defaultSubaccount());
  };

  // Returns canister's default account identifier as a blob.
  public query func canisterAccount() : async Account.AccountIdentifier {
    myAccountId();
  };

};
