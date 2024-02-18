import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff} from "lucide-react";
import { useState } from "react";
import { CiDesktopMouse1 } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
export const Profile = () => {
  const [id, seeId] = useState(false);
  return (
    <div className="h-[100vh] border-l border-[#2D2E35] ml-3 px-4">
      <h1 className="text-center text-xl py-3">User Profile</h1>
      <div className="flex flex-col items-center">
        
        <MdPerson size={60}/>
      </div>
      <div className="my-5">
        <h1>Account</h1>
        <div className="pt-7">
          <div className={cn("flex items-center space-x-4 pb-4 text-gray-400")}>
            <h4>Pricipal-Id</h4>
            {id ? (
              <div
                onClick={() => seeId(!id)}
                className="flex items-center space-x-3"
              >
                <p className={cn("", id && "block")}>2dhyt5gr56fet6hi7hdr7</p>
                <EyeOff />
              </div>
            ) : (
              <div
                onClick={() => seeId(!id)}
                className="flex items-center space-x-3"
              >
                <p className={cn("", !id && "block")}>******************</p>
                <Eye />
              </div>
            )}
          </div>
          <div className={cn(" text-gray-400")}>
            <h4 className="text-xl">Transactions</h4>
            <div className="flex flex-col items-center">
              <Button className="text-center" variant="link">
                Sell all my transactions
              </Button>
            </div>
          </div>
          <div className={cn(" text-gray-400")}>
            <h4 className="text-xl mb-3">Wallets</h4>
            <div className="flex items-center space-x-4">
              <Button className="text-center" variant="outline">
                USD wallet
              </Button>
              <Button className="text-center" variant="outline">
              Icp tokens
              </Button>
            </div>
            <div className={cn("flex justify-center text-gray-400 my-5")}>
              {/* when user toggle between usd wallet it should convert to either in usd or crypto */}
            <p>0.00 Tokens</p>
          </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="primary"><CiDesktopMouse1 className="mr-3"/> Deposit</Button>
            <Button variant="primary"><CiDesktopMouse1 className="mr-3"/>Withdraw</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
