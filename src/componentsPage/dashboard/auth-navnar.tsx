import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
export const AuthNavBar = () => {
  const scrolled = useScrollTop();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));
  return (
    <div
      ref={ref}
      className={cn(
        " mx-4 px-3 mb-3  pb-6 z-1000 zh overflowx-hidden",
        scrolled && "border-b "
      )}
    >
      <div className="  w-full pt-6 max-w-[1280px] mx-auto">
        <div
          className={cn("flex items-center justify-between z-5000 text-white ")}
        >
          <Link to="/">
            <h1 className="text-yellow-300 text-4xl font-[900] mb-4">
              Cyber<span className="text-yellow-800">Escrow</span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center justify-between space-x-4 ">
          <Link to="/marketplace" className="text-xl font-bold">
              Marketplace
            </Link>
            <Link to="/peertonode" className="text-xl font-bold ">
              Sell coins
            </Link>
            <Link to="/marketplace" className="text-xl font-bold">
              Buy coins
            </Link>
            
            <Link to="/trade" className="text-xl font-bold">
              Trade
            </Link>
            <Link to="/pay" className="text-xl font-bold">
              Pay
            </Link>

            <Link to="/convert" className="text-xl font-bold">
              Convert
            </Link>
            <Link to="/deposit" className="text-xl font-bold">
              Deposit
            </Link>
            <Link to="/withdraw" className="text-xl font-bold">
              Withdraw
            </Link>
            
            <Link to="/wallet" className="text-xl font-bold">
              MyWallet
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Bell />

            <Button>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};