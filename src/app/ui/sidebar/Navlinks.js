import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdSell } from "react-icons/md";
import { TbRouteX2 } from "react-icons/tb";
import { CgCommunity } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { name: "Home", href: "/", icon: <GoHomeFill /> },
  { name: "Books", href: "/store", icon: <IoBookSharp /> },
  { name: "Sell Or Lend", href: "/store/sell-lend", icon: <MdSell /> },
  { name: "Track order", href: "/store/track-order", icon: <TbRouteX2 /> },
  { name: "Communities", href: "/store/communities", icon: <FcAbout /> },
  { name: "Settings", href: "/store/settings", icon: <CiSettings /> },
  { name: "About", href: "/store/about", icon: <CgCommunity /> },
  { name: "Admin", href: "/store/admin", icon: <MdAdminPanelSettings /> },
];

export default function Navlinks() {
  return (
    <div className="flex flex-wrap md:flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 md:text-gray-900 hover:bg-gray-100 group md:text-md"
        >
          <span className="text-xl md:font-bold">{link.icon}</span>
          <span className="ml-3">{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
