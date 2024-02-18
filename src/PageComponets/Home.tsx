import { Button } from "@/components/ui/button";
import { CardProperties } from "@/componentsPage/Card";
import { NavBar } from "@/componentsPage/NavBar";
import { Reasons } from "@/componentsPage/reasons";
import { Whoweare } from "@/componentsPage/whowe-are";
import { Footer } from "./Footer";
import image2 from "../assets/bit1.svg";
import image3 from "../assets/bit3.svg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
export const Home = () => {
  const navigate = useNavigate();
  const autheticate = () => {
    navigate("/create-account");
  };

  return (
    <div className="overflow-x-hidden bg-[#f3f4f5] body">
      <NavBar />
      <div className="max-w-[1200px] mx-auto  flex relative z-1  ">
        <div className="w-full lg:w-3/4 mt-6 px-3 lg:px-0">
          <h1 className=" hidden lg:block lg:text-[54px] font-[600] mt-10">
            <span className="text-blue-300">Secure </span> Your Transactions
            <br />
            With FairTrade{" "}
            <span className="text-blue-300"> Escrow System </span>
          </h1>
          <h1 className="lg:hidden text-center text-2xl pb-2 font-[600]">
            <span className="text-blue-300">Secure </span> Your Transactions
            <br />
            On FairTrade{" "}
            <span className="text-blue-300">Escrow System </span>
          </h1>
          <p className=" trackin text-[16px] text-white text-xl text-center lg:text-left w-full lg:w-1/2 mb-10">
            We provides a reliable and transparent platform built with blockchain technology to perform seamless and
            secure exchange
          </p>

          <Button
            variant="primary"
            className="hidden lg:flex"
            onClick={autheticate}
          >
            Get started{" "}
            <span className="ml-1">
              <ArrowRight size={15} />
            </span>
          </Button>
        </div>
        <div className="hidden lg:block">
          <img src={image2} alt="" width={300} height={300} />
          <img
            src={image3}
            alt=""
            width={250}
            height={250}
            className="absolute top-10 right-[81px]"
          />
        </div>
      </div>

      <Whoweare />
      <div className="mt-9">
        <h1 className="text-center text-4xl font-bold text-[#ecedee]">
          How FairTrade Works
        </h1>
        <CardProperties />
      </div>

      <div className="my-9 zg mx-4">
        <Reasons />
      </div>

      <div className="flex flex-col items-center my-[50px]">
        <p className="my-4 text-xl text-white">
          Ready to explore the Our Escrow System
        </p>
        <Button variant="outline" onClick={autheticate}>
          Get Started With FairTrade
        </Button>
      </div>
      <Footer />
    </div>
  );
};
