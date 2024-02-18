import secure from "../assets/secure.png";
import fraud from "../assets/fraud-free.png";
import dispute from "../assets/dispute.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const devops = [
  {
    name: "100% Secured",
    image: secure,
    message:
      "We employ the latest encryption technologis to safeguard your financial information and senstive data",
  },
  {
    name: "Fraud Free",
    image: fraud,
    message:
      "FairTrade help prevent fraud by ensuring that both parties meet the agreed-upon terms before the funds are released",
  },
  {
    name: "Dispute Resolution",
    image: dispute,
    message:
      "FairTrade includes a dispute resolution mechanism. If there is a disagreement between the parties, the FairTrade agent can help mediate and find a fair resolution.",
  },
]
export const Reasons = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      <div className="mb-[70px]  md:flex justify-between items-start">
        <h1 className=" text-4xl text-white font-bold pb-4">Why Choose FairTrade</h1>
        <p className="w-full lg:w-[50%] text-white leading-[34px]">
          At FairTrade we understand the importance of trust and security in
          online transctions. Whether you are buying or selling goods or
          service,our escrow system provides a reliable and transparent platform
          to perform seamless and secure exchange
        </p>
      </div>
      <div className="  flex flex-col md:flex-row space-y-4 md:space-y-0 items-center md:space-x-4  justify-between ">
        {devops.map((devs) => (
          <div className="w-full bg-[#25203d] py-6 px-5 rounded-[10px] h-[320px] md:h-[350px] ">
            <div className="">
              <img
                src={devs.image}
                height={100}
                width={100}
                className="border"
              />
              <h1 className=" text-2xl text-white my-4">{devs.name}</h1>
            </div>
            <p className="w-full md:w-[90%] lg:w-[70%] text-[#ebe0e0]">{devs.message}</p>
          </div>
        ))}
      </div>
      \
    </div>
  );
};
