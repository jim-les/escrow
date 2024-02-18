import Array     "mo:base/Array";
import Blob      "mo:base/Blob";
import Nat8      "mo:base/Nat8";
import Nat32     "mo:base/Nat32";
import Principal "mo:base/Principal";
import Text      "mo:base/Text";
import Buffer      "mo:base/Buffer";
import CRC32     "./CRC32";
import SHA224    "./SHA224";

// module to generate account identifiers and subaccounts
// based on the principal and subaccount and to validate
// the subaccount and account identifier are for the same principal used to generate the account identifier
// the account identifier is a 32-byte array which we will use to identify the account

//we will also generate a central escrow node which will be used to hold the funds of the users
//the escrow node will be identified by the principal of the canister and the subaccount will be the default subaccount
//the central node will be creating a wallet to hold the funds of the users till the buyer sends usdt payment to the escrow node
//the escrow node will then transfer the funds to the seller and the buyer will receive the product
//the escrow node will also be used to hold the funds of the seller till the buyer receives the product
//the escrow node will then transfer the funds to the seller upon confirmation of the buyer
// if conflict arises the escrow will auto select a third party to resolve the conflict
// upon successful resolution the funds will be transferred to the rightful owner and the third party will receive a fee for the resolution as well some cyberescrow coins which will be launched in the future
// after a success trade both parties will be awarded some cyberescrow coins which will be launched in the future
// the cyberescrow coins will be used to pay for the fees of the escrow node and also to pay for the resolution of conflicts
// the cyberescrow coins will be a total of 1000000000 and will be distributed to the users of the escrow node

module {
  // 32-byte array.

  public type AccountIdentifier = Blob;
  // 32-byte array.
  public type Subaccount = Blob;

  // function to convert a principal to a subaccount
  //bytes function to convert a 32 bi unsigned integer to a 8 bit unsigned integer
  func beBytes(n: Nat32) : [Nat8] {
    func byte(n: Nat32) : Nat8 {
      Nat8.fromNat(Nat32.toNat(n & 0xff))
    };
    [byte(n >> 24), byte(n >> 16), byte(n >> 8), byte(n)]
  };

  
  // convert a principal to a subaccount returns a 32 byte array as ablob
  public func principalToSubaccount(principal: Principal) : Blob {
      let idHash = SHA224.Digest();
      idHash.write(Blob.toArray(Principal.toBlob(principal)));
      let hashSum = idHash.sum();
      let crc32Bytes = beBytes(CRC32.ofArray(hashSum));
      let buf = Buffer.Buffer<Nat8>(32);
      let blob = Blob.fromArray(Array.append(crc32Bytes, hashSum));

      return blob;
  };

// function to generate a default subaccount
  public func defaultSubaccount() : Subaccount {
    Blob.fromArrayMut(Array.init(32, 0 : Nat8))
  };

  // function to generate an account identifier from a principal and a subaccount
  // returns a 32 byte array as a blob
  public func accountIdentifier(principal: Principal, subaccount: Subaccount) : AccountIdentifier {
    let hash = SHA224.Digest();
    hash.write([0x0A]);
    hash.write(Blob.toArray(Text.encodeUtf8("account-id")));
    hash.write(Blob.toArray(Principal.toBlob(principal)));
    hash.write(Blob.toArray(subaccount));
    let hashSum = hash.sum();
    let crc32Bytes = beBytes(CRC32.ofArray(hashSum));
    Blob.fromArray(Array.append(crc32Bytes, hashSum))
  };

    // function to validate a subaccount is valid returns a boolean True or False
  public func validateAccountIdentifier(accountIdentifier : AccountIdentifier) : Bool {
    if (accountIdentifier.size() != 32) {
      return false;
    };
    let a = Blob.toArray(accountIdentifier);
    let accIdPart    = Array.tabulate(28, func(i: Nat): Nat8 { a[i + 4] });
    let checksumPart = Array.tabulate(4,  func(i: Nat): Nat8 { a[i] });
    let crc32 = CRC32.ofArray(accIdPart);
    Array.equal(beBytes(crc32), checksumPart, Nat8.equal)
  };

  //function to generate an escrow node account identifier
    public func escrowNodeAccountIdentifier(principal: Principal) : AccountIdentifier {
        accountIdentifier(principal, defaultSubaccount())
    };
}
