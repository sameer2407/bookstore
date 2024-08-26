import { getAllBooks } from "../lib/book_data";
import BookList from "../ui/sidebar/booklist/BookList";

// fetch  all the books from get all books  and pass the book data to another Booklist component

export default function BookListPage() {
  const books = getAllBooks();
  return (
    <>
      <BookList books={books} />
    </>
  );
}
