import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Bookstore",
  description: "Bookstore",
};

export default function BookstoreLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row web  ">
      <Sidebar />
      <div className="flex flex-wrap p-2 justify-center flex-1">{children}</div>
    </div>
  );
}
