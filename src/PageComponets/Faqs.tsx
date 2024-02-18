import { NavBar } from "@/componentsPage/NavBar";
import { cn } from "@/lib/utils";
import { Diamond } from "lucide-react";
import { Footer } from "./Footer";

export const FAQs = () => {
  return (
    <div className="body">
      <NavBar />
      <div
        className={cn(
          "flex flex-col  max-w-[1200px] mx-auto  pb-4 para h1 pt-[10px] mb-[100px]"
        )}
      >
        <h2 className="text-center text-[#752938] text-[45px] md:text-[54px] font-[400] mb-[20px] ">
          Most Frequently Asked Questions
        </h2>
        <div className="flex items-center  mas mb-7 px-4">
          <div className="border-b-2 flex-1" />
          <Diamond />
          <div className="border-b-2 flex-1" />
        </div>
        <h1 className="text-black font-semibold">What is FairTrade system?</h1>
        <p className={cn(" para ")}>
          Is an online secure financial arrangement where a third party holds
          and regulates payment of funds between two parties involved in a
          transaction. It ensures that both parties meet their obligations
          before the funds are released.
        </p>
        <h1 className="text-black font-semibold"> How does an FairTrade</h1>{" "}
        <p >
          {" "}
          The buyer and seller agree to the terms of the transaction. The buyer
          then deposits the funds into the escrow account. The seller is
          notified to proceed with the delivery of goods or services. Once both
          parties fulfill their obligations, the funds are released to the
          seller.
        </p>
        <h1 className="text-black font-semibold"> Is it safe to use</h1>
        <p>
          Yes,FairTrade employs encryption and security measures to protect the
          financial information of the parties involved.
        </p>
        <h1 className="text-black font-semibold">How long does the escrow process take?</h1>
        <p>
          {" "}
          The duration of the escrow process depends on the agreement between
          the parties and the type of transaction. It typically ranges from a
          few days to a few weeks, allowing sufficient time for both parties to
          fulfill their obligations.
        </p>
        <h1 className="text-black font-semibold"> What happens if there is a dispute during the escrow process?</h1>
        <p>
          {" "}
          FairTrade often have dispute resolution mechanisms in place. They may
          act as mediators to facilitate communication and reach a resolution.
          In some cases, the escrow provider may release funds according to
          predetermined conditions or involve legal authorities.
        </p>
        <h1 className="text-black font-semibold"> Are there any fees associated with using an FairTrdae system? </h1>
        <p>
          Yes,. These fees can vary based on the transaction amount, the
          complexity of the deal, and additional services required. It's crucial
          to understand the fee structure before initiating an escrow.
        </p>{" "}
        <h1 className="text-black font-semibold"> Can I cancel an escrow transaction once it's initiated?</h1>
        <p>
          Escrow transactions are typically binding agreements. However, some
          services may have cancellation policies outlined in their terms and
          conditions. It's essential to review these terms before initiating a
          transaction.
        </p>
      </div>
      <Footer/>
    </div>
  );
};
