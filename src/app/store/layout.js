"use client";
import Sidebar from "../ui/sidebar/Sidebar";
import { MyProvider } from "@/contextAPI/MyProvider";

export default function BookstoreLayout({ children }) {
  return (
    <MyProvider>
      <div className="flex flex-col md:flex-row web  ">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center flex-1">
          {children}
        </div>
      </div>
    </MyProvider>
  );
}
