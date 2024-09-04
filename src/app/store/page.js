import { getAllBooks } from "../db/queries";
import BookList from "../ui/sidebar/booklist/BookList";

const BookListPage = async () => {
  const books = await getAllBooks();

  console.log(books);
  return <BookList books={books} />;
};

export default BookListPage;
