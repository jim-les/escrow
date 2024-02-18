import { GoHome } from "react-icons/go";
import { NavItem } from "./nav-item";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
export const NavigationSideBar = () => {
  const routes = [
    {
      label: "Home",
      href: `/`,
      icon: GoHome,
    },
    
    {
      label: "Dashboard",
      href: `/dashboard`,
      icon: LuLayoutDashboard,
    },
    {
      label: "P2N",
      href: `/peertonode`,
      icon: LuLayoutDashboard,
    },
    {
      label: "Discover",
      href: `/discover`,
      icon: RiCompassDiscoverLine,
    },
    {
      label: "Notifications",
      href: `/notifications`,
      icon: IoIosNotificationsOutline,
    },
    {
      label: "Wallet",
      href: `/wallet`,
      icon: CiWallet,
    },
    {
      label: "Logout",
      href: '',
      icon: CiLogout,
    },
  ];
  //to do add skeleton
  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0">
      {routes.map((route) => (
        <NavItem
          key={route.label}
          label={route.label}
          icon={route.icon}
          href={route.href}
        />
      ))}
    </ul>
  );
};
