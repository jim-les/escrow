import { cn } from "@/lib/utils";
import { creatorSidebar } from "../../../providers/creator-sidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Setting } from "@/componentsPage/settings/settings";
import { SideBar } from "@/componentsPage/dashboard";

export const Settings = () => {
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
    <div className={cn("bg-black h-[100vh] text-white")}>
      <div className="max-w  mx-3 flex justify-between ">
        <SideBar />
        <div
          className={cn(
            "flex-1",
            collapsed ? "ml-[10px]" : "ml-[70px] lg:ml-[10px]"
          )}
        >
          <Setting />
        </div>
      </div>
    </div>
  );
};
