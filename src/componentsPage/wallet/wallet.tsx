import { cn } from "@/lib/utils";
import { Wallet2Icon } from "lucide-react";
import { CiMoneyCheck1 } from "react-icons/ci";

export const WalletPage = () => {
  return (
    <div>
      <h1 className="text-gray-400 font-thin">
        Hi,Welcome lets start trading on FairDeal!
      </h1>
      <div className="mt-8">
        <h1 className="text-4xl">Manage Your Wallet</h1>
        <div className="mt-7 text-gray-600">
          <h3 className="font-small my-5">wallet balance either in dollars or icp tokens</h3>
          <div>
            <div className=" flex space-x-10">
              <div className="border p-3 rounded-md w-1/2">
                <div className="flex space-x-3 items-center">
                  <Wallet2Icon size={15} />
                  <h6 className="font-small">USD wallet</h6>
                </div>
                <div className={cn("py-4")}>
                  <h1 className="font-small mb-3">Balance is: $0.00</h1>
                  <h1 className="font-small">
                    Last updated: <span>{new Date().getDate()}</span>/
                    <span>{new Date().getMonth() + 1}</span>/
                    <span>{new Date().getFullYear()}</span>
                  </h1>
                </div>
              </div>
              <div className="border p-3 rounded-md w-1/2">
                <div className="flex space-x-3 items-center">
                  <Wallet2Icon size={15} />
                  <h6 className="font-small">ICP wallet</h6>
                </div>
                <div className={cn(" py-4")}>
                  <h1 className="font-small mb-3">Balance is: 0.00 coins</h1>
                  <h1 className="font-small">
                    Last updated: <span>{new Date().getDate()}</span>/
                    <span>{new Date().getMonth() + 1}</span>/
                    <span>{new Date().getFullYear()}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-10 mb-5">Transact</h1>
          <div className="flex justify-between w-1/2">
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Deposit</h1>
            </div>
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Withdraw</h1>
            </div>
            <div className="border rounded-md p-7 flex flex-col items-center cursor-pointer">
                <CiMoneyCheck1 size={34} className="text-red-700"/>
                <h1>Buy or sell</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
