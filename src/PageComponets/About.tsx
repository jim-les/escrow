import { NavBar } from "@/componentsPage/NavBar";
import { Footer } from "./Footer";
import { Diamond } from "lucide-react";

export const AboutUs = () => {
  return (
    <div className="body">
      <NavBar />

      <div className="max-w-[1200px] mx-auto mt-[10px] mb-[70px] ">
        <h1 className="text-center text-[#752938] text-[45px] md:text-[54px] font-[400] mb-[20px] ">
          About FairTrade
        </h1>
        <div className="flex items-center  mas mb-7 px-4">
          <div className="border-b-2 flex-1" />
          <Diamond />
          <div className="border-b-2 flex-1" />
        </div>
        <p className="px-4 leading-9 tracking-wide">
          {" "}
          At FairTrade we understand the importance of trust and security in
          online transctions. Whether you are buying or selling goods or
          service,our escrow system provides a reliable and transparent platform
          to perform seamless and secure exchange
        </p>
        <h1 className="text-2xl font-extrabold  p-4">
          Our commmitment to security
        </h1>
        <p className="px-4 leading-9 tracking-wide">
          Security is the heart of everything we do.We employ the latest
          encryption technologis to safeguard your financial information and
          senstive data.Our team of experts continue to monitor and update our
          security protocols to stay ahead of eveolving online threats
        </p>
        <h1 className="text-2xl font-extrabold p-4">How FairTrade Works</h1>
        <ol type="1" px-4>
          <li className="leading-9 tracking-wide px-4">
            <span className="font-bold">1.Create an account:</span>Sign up for
            free account to get started.Your personal information is kept in
            secret and you can trust that your data s in safe hands
          </li>
          <li className="leading-9 tracking-wide px-4">
            <span className="font-bold">2.Initiate a transaction:</span>Once you
            have found a buyer or seller and agrred to terms,intiate your
            transaction to our platform.Specify the terms and conditions
            including agreed upon price ,delivery condtions and any other
            details
          </li>
          <li className="leading-9 tracking-wide px-4">
            <span className="font-bold">3.Escrow Holding:</span>The agreed upon
            funds ara securely held in an escrow while the transaction is on
            progress.This ensures all the parties dulfil their obligation before
            the funds are relaesed
          </li>
          <li className="leading-9 tracking-wide px-4">
            <span className="font-bold">4.Verification and inspection:</span>{" "}
            Depending on the nature of transaction,our system allow for
            verification and inspection period.This additional layer of security
            ensures that both parties are satisfied with terms and conditions
            before the completion of transaction
          </li>
          <li className="leading-9 tracking-wide px-4">
            <span className="font-bold">4.Funds release:</span>
            Once conditions are met,the funds are released to the appropriate
            party.Our escrow system act asan impartial intermediary ensuring a
            fair and trustworthy resolution.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};
