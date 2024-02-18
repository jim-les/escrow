import { NavBar } from "@/componentsPage/NavBar";
import { Diamond } from "lucide-react";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export const TermaConditions = () => {
  return (
    <div className="body">
      <NavBar />
      <div className="max-w-[1200px] mx-auto mt-[100px] mb-[100px] px-[30px]">
        <h1 className="text-center text-[#752938] text-[54px] font-[400] mb-[20px]">
          Terms & Conditions
        </h1>
        <div className="flex items-center  mas mb-7">
          <div className="border-b-2 flex-1" />
          <Diamond />
          <div className="border-b-2 flex-1" />
        </div>
        <div className={cn("text-[16px] font-[300] text-white leading-[24px] pt-4")}>
          <p>
            <span className="text-bold text-xl  text-black">Fees:</span>
            The fees for using our escrow services are outlined in our fee
            schedule. All fees are the responsibility of the party initiating
            the escrow transaction.
          </p>
          <p className="pt-4">
            <span className="text-xl  text-bold text-black">Dispute Resolution:</span>
            In the event of a dispute, both parties agree to cooperate with the
            Escrow Service Provider&#39;s resolution process. If a resolution
            cannot be reached, the Escrow Service Provider may, at its
            discretion, involve third-party arbitration.
          </p>
          <p className="pt-4">
            <span className="text-xl text-bold text-black">
              Cancellation and Refunds:
            </span>
            Escrow transactions cannot be canceled unilaterally once initiated.
            Refunds are only issued in accordance with the refund policy
            outlined by the Escrow Service Provider.
          </p>
          <p className="pt-4">
            <span className="text-xl  text-bold text-black">Termination:</span>
            The Escrow Service Provider reserves the right to terminate or
            suspend an account at its discretion, with or without cause.
          </p>
          <p >
            By using our escrow services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
