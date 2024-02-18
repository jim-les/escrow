import { SideBar } from "@/componentsPage/dashboard";
import { cn } from "@/lib/utils";
import { creatorSidebar } from "../../../providers/creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Notifications = () => {
  const { collapsed, onCollapse, onExpand } = creatorSidebar((state) => state);
  const matches = useMediaQuery(`(max-width: 1024px)`);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div className={cn(" h-[100vh")}>
      <div className="mx-3 flex justify-between ">
        <SideBar />
        <div
          className={cn(
            "flex-1",
            collapsed ? "ml-[10px]" : "ml-[70px] lg:ml-[10px]"
          )}
        >
            <div className="text-red-500 mt-[200px] flex items-center justify-center">
                <h1>Notifications on this page try refresshing</h1>
            </div>
        </div>
        
       
      </div>
    </div>
  );
};
