import { cn } from "@/lib/utils";
import { creatorSidebar } from "../../../providers/creator-sidebar";

import { Toggle } from "./toggle";
import { NavigationSideBar } from "./navigation";

export const SideBar = () => {
  const { collapsed } = creatorSidebar((state) => state);
  return (
    <aside
      className={cn(
        " flex flex-col w-[70px] lg:w-60 h-[100vh]  border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-[70px]"
      )}
    >
      <Toggle />
      <NavigationSideBar />
    </aside>
  );
};
