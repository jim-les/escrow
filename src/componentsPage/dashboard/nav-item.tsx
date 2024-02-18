import { Button } from "@/components/ui/button";
import { creatorSidebar } from "../../../providers/creator-sidebar";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { Skeleton } from "@/components/ui/skeleton";
interface NavItemProps {
  icon: IconType;
  label: string;
  href: string;
}
export const NavItem = ({ icon: Icon, label, href }: NavItemProps) => {
  const { collapsed } = creatorSidebar((state) => state);
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start"
      )}
    >
      <Link to={href}>
        <div className="flex items-center gap-x-4">
          <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
};
export const NavItemSkeleton = () => {
    return (
      <li className="flex items-center gap-x-4 px-3 py-2">
        <Skeleton className="min-h-[48px] min-w-[48px] rounded-md" />
        <div className="flex-1 hidden lg:block">
          <Skeleton className="h-6" />
        </div>
      </li>
    );
  };