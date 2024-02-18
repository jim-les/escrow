import { cn } from "@/lib/utils";
import { creatorSidebar } from "../../providers/creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { SideBar } from "./dashboard";
export const Container = () => {
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
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      <SideBar />
      <div className="">hell</div>
      <SideBar/>
     
    </div>
  );
};
