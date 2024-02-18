import { cn } from "@/lib/utils";
export const Whoweare = () => {
  return (
    <div className="max-w-[1200px] mx-auto z-1">
      <div className="md:flex flex-col lg:flex-row lg:items-start  px-2 lg:px-0 lg:justify-between pt-[100px]   ">
        <h1 className="text-4xl font-bold pb-4">Who We are?</h1>
        <div className={cn("text-white  w-full lg:w-1/2")}>
          <h1 className="text-xl">We make the process simple and effortless</h1>
          <p className="mt-4 text-left leading-[1.7rem] text-[1.12rem] text-[#bebcbc] ">
            FairTrade is an online secure financial arrangement where a third
            party holds and regulates payment of funds between two parties
            involved in a transaction. It ensures that both parties meet their
            obligations before the funds are released.
          </p>
          <p className="mt-4  text-left leading-[1.7rem] text-[1.12rem] text-[#bebcbc]">
            Our purpose is to provide a secure and neutral intermediary,
            ensuring that both the buyer and the seller fulfill their respective
            obligations before the final transfer of coins or assets takes
            place.
          </p>
        </div>
      </div>
    </div>
  );
};
