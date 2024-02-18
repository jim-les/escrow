import { NavBar } from "@/componentsPage/NavBar";
import { Diamond } from "lucide-react";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export const Privancy = () => {
  return (
    <div className="body">
      <NavBar />
      <div className="max-w-[1200px] mx-auto mb-[100px] mt-[10px]">
        <h1 className="text-center text-[#752938] text-[54px] font-[400] mb-[20px] ">
          Privancy Policy
        </h1>
        <div className="flex items-center  mas mb-7 px-4">
          <div className="border-b-2 flex-1" />
          <Diamond />
          <div className="border-b-2 flex-1" />
        </div>
        <div className="px-4">
          <p className={cn("text-[16px] text-white font-[300] leading-[24px]")}>
            FairTrade is committed to protecting the privacy and security of
            your personal information. This Privacy Policy outlines how we
            collect, use, disclose, and safeguard your information in relation
            to the use of our escrow services.
            <p>
              {" "}
              We collect personal information provided by users during the
              registration and escrow setup process, including but not limited
              to name, contact information, and financial details.Additionally,
              we may collect information related to escrow transactions, such as
              transaction history, communication logs, and dispute resolution
              details.
            </p>
            <p className="pt-4">
              Use of Information Personal information is used to facilitate
              escrow transactions, verify user identities, and provide customer
              support.
            </p>
            <p className="pt-4">
              {" "}
              Aggregate and anonymized data may be used for statistical
              analysis, product improvement, and marketing purposes.
            </p>
            <p className="pt-4">
              Disclosure of Information: We do not sell, trade, or otherwise
              transfer your personal information to third parties without your
              explicit consent, except as required by law.
            </p>
            <p className="pt-4">
              {" "}
              Information may be disclosed to authorized employees and service
              providers who need the information to perform escrow-related
              tasks. Security: 5.1. We employ industry-standard security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, and destruction.
            </p>
            <p className="pt-4">
              {" "}
              This Privacy Policy may be updated periodically. Users will be
              notified of any material changes, and continued use of our
              services after such changes constitutes acceptance of the revised
              policy.
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
