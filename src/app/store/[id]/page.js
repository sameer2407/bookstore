"use client";
import { useSearchParams } from "next/navigation";
import Bookdetails from "../../ui/sidebar/booklist/Bookdetails";
export default function BookdetailsPage({ params }) {
  const id = params.id;
  console.log("this is the id", id);

  return (
    <div>
      <Bookdetails id={id} />
    </div>
  );
}
