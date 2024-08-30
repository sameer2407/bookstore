// make a book card component
import Link from "next/link";
import Image from "next/image";
import { GoBook } from "react-icons/go"; //import the book icon

const BookCard = ({ book }) => {
  return (
    <Link
      href={`/store/${book.id}`} //pass the book id to the book details page
      className="flex flex-col items-start p-4 text-sm font-medium text-gray-200 md:text-gray-900 hover:bg-gray-100 group md:text-md transition duration-300 ease-in-out hover:shadow-md"
    >
      {/* add image  of the books also in the card */}
      <Image
        src={book.cover}
        width={150}
        height={200}
        className="rounded-md shadow-md"
      />
      <div className="flex flex-col items-start mt-2">
        <span className="font-bold">{book.title}</span>
        <span className="text-gray-500 font-italic text-sm">
          by <span className="text-purple-600">{book.author}</span>
        </span>
        <span className="text-gray-900 font-bold">${book.sellPrice}</span>
        <span className="text-gray-900 font-bold">{book.rating}/5</span>
      </div>
    </Link>
  );
};
export default BookCard;
