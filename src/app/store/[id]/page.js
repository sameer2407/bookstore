import Bookdetails from "../../ui/sidebar/booklist/Bookdetails";
import { getBookById } from "@/app/db/queries";
export default async function BookdetailsPage({ params }) {
  const id = params.id;
  let book = null;

  try {
    book = await getBookById(id);
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
  }

  if (!book) {
    return <div>Error loading book details. Please try again later.</div>;
  }

  return (
    <div>
      <Bookdetails book={book} />
    </div>
  );
}
