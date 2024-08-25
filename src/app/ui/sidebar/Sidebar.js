import Link from "next/link";
import Navlinks from "./Navlinks";
import { GoSignOut } from "react-icons/go";
import { IoLibraryOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="w-full md:w-60 bg-purple-600 text-gray-200 md:text-gray-900 flex flex-wrap md:flex-col md:h-screen">
      <div className="flex items-center justify-between px-4 py-4 w-full">
        <IoLibraryOutline className="text-2xl" />
        <Link href="/store" className="pl-2 text-2xl">
          BookFinder
        </Link>
      </div>

      <Navlinks />

      <form className="flex items-center px-4 py-4 w-full ">
        <GoSignOut />
        <button className="ml-2 ">
          <span className="font-bold">Signout</span>
        </button>
      </form>
    </div>
  );
}
