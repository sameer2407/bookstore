// make a book card component
import Link from "next/link";
import Image from "next/image";
import { GoBook } from "react-icons/go"; //import the book icon
import { AR_One_Sans } from "next/font/google";

const BookCard = ({ book }) => {
  // add next font
  const arOneSans = AR_One_Sans({ subsets: ["latin"] });

  return (
    <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 md:text-gray-900 hover:bg-gray-100 group md:text-md">
      <Link
        href={`/store/book/${book.id}`} //pass the book id to the book details page
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-200 md:text-gray-900 hover:bg-gray-100 group md:text-md"
      >
        {/* add image  of the books also in the card */}
        <GoBook />
        <Image src={book.cover} width={100} height={100}></Image>
        <span className="ml-3" style={arOneSans.style}>
          {book.title}
        </span>
      </Link>
    </div>
  );
};
export default BookCard;
