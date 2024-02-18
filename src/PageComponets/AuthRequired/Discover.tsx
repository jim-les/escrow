import { useMediaQuery } from "usehooks-ts";
import { creatorSidebar } from "../../../providers/creator-sidebar";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { SideBar } from "@/componentsPage/dashboard";
import { Profile } from "@/componentsPage/dashboard/profile";
import { DiscoverPage } from "@/componentsPage/discover/discover";

export const Discover=()=>{
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
      <div className={cn(" h-[100vh] ")}>
        <div className="max-w  mx-3 flex justify-between ">
          <SideBar />
          <div
            className={cn(
              "flex-1",
              collapsed ? "ml-[10px]" : "ml-[70px] lg:ml-[10px]"
            )}
          >
              <DiscoverPage/>
          </div>
          <Profile/>
        </div>
      </div>
    );
}