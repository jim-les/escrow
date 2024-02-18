import { SideBar } from "@/componentsPage/dashboard";
import { Main } from "@/componentsPage/dashboard/main";
import { Profile } from "@/componentsPage/dashboard/profile";
import { cn } from "@/lib/utils";
import { creatorSidebar } from "../../../providers/creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export const DashBoard = () => {
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
      <div className="max-w  mx-3 flex justify-between ">
        <SideBar />
        <div
          className={cn(
            "flex-1",
            collapsed ? "ml-[10px]" : "ml-[70px] lg:ml-[10px]"
          )}
        >
            <Main />
        </div>
        
        <Profile />
      </div>
    </div>
  );
};
