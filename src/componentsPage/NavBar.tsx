import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
export const NavBar = () => {
  const scrolled = useScrollTop();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));
  const navigation = useNavigate();
  const navigate = () => {
    navigation("/dashboard");
  };
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
          className={cn(
            "flex items-center justify-between z-5000 text-white "
          )}
        >
          <Link to="/">
            <h1 className="text-yellow-300 text-4xl font-[900] mb-4">
              Fair<span className="text-yellow-800">Trade</span>
            </h1>
          </Link>
          <div className="hidden lg:flex items-center justify-between space-x-4 ">
            <Link to="/about-us" className="text-xl font-bold ">
              About Us
            </Link>
            <Link to="/contact-us" className="text-xl font-bold">
              Contact-Us
            </Link>
            <Link to="/faqs" className="text-xl font-bold">
              FAQs
            </Link>
          </div>
          <div className="hidden lg:block">
            <Button variant="primary" onClick={navigate}>
              Get Started
            </Button>
          </div>
          <div className="lg:hidden zh">
            {isOpen ? (
              <X onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <Menu onClick={() => setIsOpen(!isOpen)} />
            )}
            {isOpen && (
              <div className="border-b rounded-md h-[300px] absolute right-0 left-0 top-[100px] bg-white z-10000">
                <div className="flex flex-col space-y-4 mt-4 px-4">
                  <Link
                    to="/"
                    className={cn(
                      "text-[18px] leading-[24px] text-[#000] font-[500] border-b pb-3 pl-4"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us"
                    className={cn(
                      "text-[18px] leading-[24px] text-[#000] font-[500] border-b pb-3 pl-4"
                    )}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact-us"
                    className={cn(
                      "text-[18px] leading-[24px] text-[#000] font-[500] border-b pb-3 pl-4"
                    )}
                  >
                    Contact-us
                  </Link>
                  <Link
                    to="/faqs"
                    className={cn(
                      "text-[18px] leading-[24px] text-[#000] font-[500] border-b pb-3 pl-4"
                    )}
                  >
                    FAQs
                  </Link>
                  <div className="flex justify-center md:justify-start md:pl-4">
                    <Button variant="primary" className="w-3/4 md:w-[100px]">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
