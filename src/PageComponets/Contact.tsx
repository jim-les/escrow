import { ContactUsForm } from "@/componentsPage/Contactform";
import { NavBar } from "@/componentsPage/NavBar";
import { Footer } from "./Footer";
export const Contact = () => {
  return (
    <div className="body">
      <NavBar />

      <div className="max-w-[1200px] mx-auto mt-[10px] mb-[150px]">
        <div className="w-full h-[670px] contact flex justify-center items-center">
          <h1 className="text-center text-[6rem] text-black font-[700] ">
            We are Here to for You
          </h1>
        </div>
        <div className="flex flex-col items-center mx-5 mt-6">
          <h1 className="text-[2.0rem] text-[#001427] font-bold mb-2">
            Contact Us Directly
          </h1>
          <p className="text-xl text-[#001457] leading-[1.38rem] text-[1.6rem] mb-3">
            Do you have any issue concerning FairDeal send a message and we
            shalll respond
          </p>
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
