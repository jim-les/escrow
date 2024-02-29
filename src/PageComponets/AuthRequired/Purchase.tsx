import { PurchasePageComponts } from "@/componentsPage/purchase/purcahse";
import { AuthNavBar } from "@/componentsPage/dashboard/auth-navnar";
import { cn } from "@/lib/utils";
interface data{
  name: string,
  verifies: boolean,
  stars: string,
  trades: number,
  timestamp: number,
  coinName: string,
  coinsNumber:number,
  sellingPrice: number,
  contact: string,
  isActive: boolean,
}
const Purcharse = () => {
  return (
    <div className={cn("pb-[100px] text-white body flow")}>
      <AuthNavBar/>
      <div className="w-[1280px] mx-auto ">
       <PurchasePageComponts/>
      </div>
    </div>
  );
};

export default Purcharse;