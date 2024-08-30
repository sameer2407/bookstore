import { getBookById } from "../../../lib/book_data";
import Image from "next/image";

const Bookdetails = ({ id }) => {
  console.log(id);

  const book = getBookById(id);
  console.log(book);
  if (!book) return null;

  return (
    <div className="md:ml-60 w-full p-4 md:p-6 bg-white rounded-lg shadow-lg h-full overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
        <Image
          src={book.cover}
          width={250}
          height={350}
          className="rounded-lg shadow-md transition-transform transform hover:scale-105 w-full md:w-auto"
          alt={book.title}
        />
        <div className="flex flex-col items-start mt-4 md:mt-0 md:flex-grow text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            {book.title}
          </h1>
          <h2 className="text-md md:text-lg text-gray-600 italic mt-2">
            by <span className="text-purple-600">{book.author}</span>
          </h2>
          <p className="text-md md:text-lg text-gray-700 mt-4">
            <span className="font-semibold">Price: </span>${book.sellPrice}
          </p>
          <p className="text-md md:text-lg text-yellow-500 font-bold mt-2">
            Rating: {book.rating}/5
          </p>
          <button className="mt-4 md:mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-8 w-full overflow-y-auto">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Description
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed whitespace-normal">
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default Bookdetails;
