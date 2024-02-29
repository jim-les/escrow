import image1 from "../../assets/bitcoinImage.jpeg";
import image2 from "../../assets/escrowImage.jpg";
import { Button } from "@/components/ui/button";
import { ReceiptText } from "lucide-react";
export const PurchasePageComponts = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  return (
    <div className="overflow-x-hidden flow">
      <div className="border-b my-4 " />
      <div className="px-4">
        <div className="lg:flex justify-between py-5">
          <div className="lg:w-3/4 ">
            <h1 className="text-2xl font-semibold mb-6">Purchase Details</h1>
            <div
              className="bg-gray-400 flex space-x-12
             lg:justify-between p-4 rounded-md"
            >
              <div className="lg:flex-1">
                <h4 className="opacity-40 text-sm ">in Escrow</h4>
                <h1 className="font-semibold">NFT:Cyberscrow 001</h1>
                <p className="opacity-40">By:ArtMania</p>
                <div className="mt-5">
                  <Button>View in marketplace</Button>
                </div>
              </div>
              <div>
                <img src={image1} alt="" className="h-[200px] rounded-md" />
              </div>
            </div>
          </div>
          <div className="px-5  w-1/2">
            <p className="mb-6 font-semibold text-2xl">Escrow details</p>
            <div className="flex space-x-4">
              <img
                src={image2}
                alt=""
                className="w-[70px] h-[50px] rounded-md"
              />
              <div className="mb-4 lg:w-full">
                <h3>Claimable rewards</h3>
                <p className="opacity-40">0.0001ICP</p>
              </div>
            </div>
            <Button className="w-full">claim reward</Button>
          </div>
        </div>
        <div className="mt-5">
          <h1>Transactions details</h1>
          <div className="border-b my-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Price</h1>
            <h1>0.001BTC($1000)</h1>
          </div>
          <div className="border-b mt-7 mb-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Escrow fee</h1>
            <h1>0.000001BTC($10)</h1>
          </div>
          <div className="border-b mt-7 mb-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Total</h1>
            <h1>0.001BTC($1010)</h1>
          </div>
          <div className="border-b mt-7 mb-3 w-[60%]" />
        </div>
        <div className="mt-5">
          <h1>Payments instructions</h1>
          <div className="border-b my-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Recipient</h1>
            <h1>CyberEscrow</h1>
          </div>
          <div className="border-b mt-7 mb-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Adderss</h1>
            <h1>4783902e9873r8uefjchvgei3redw</h1>
          </div>
          <div className="border-b mt-7 mb-3 w-[60%]" />
          <div className="flex space-x-[160px]">
            <h1 className="opacity-25 w-[200px]">Memo</h1>
            <h1>2334</h1>
          </div>
        </div>
        <div className="mt-5">
          <Button className="w-1/4">Copy address</Button>
        </div>
        <div className="mt-5 flex space-x-4 items-center">
          <Button className="w-">
            <ReceiptText />
          </Button>
          <p>Your payment is yet to be confirmed</p>
        </div>
        <div className="mt-5">
          <p>
            Transaction initiated on {months[new Date().getMonth()]}{" "}
            {new Date().getDate()},{new Date().getFullYear()}{" "}
            {new Date().getHours()}:{new Date().getMinutes()}:
            {new Date().getSeconds()}
          </p>
        </div>
      </div>
    </div>
  );
};