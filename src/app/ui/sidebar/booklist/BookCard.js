"use client";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";

const BookCard = ({ book }) => {
  return (
    <div className="w-full md:w-48 lg:w-56 p-3 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <Link
        href={`/store/${book.id}`}
        className="flex flex-col items-center md:items-start text-gray-900 group transition duration-300 ease-in-out"
      >
        {/* Book Cover Image */}
        <Image
          src={book.cover}
          width={120}
          height={180}
          className="rounded-md shadow-md"
          alt={book.title}
        />

        {/* Book Information */}
        <div className="flex flex-col items-center md:items-start mt-3 space-y-1">
          <span className="text-md font-bold text-gray-900 group-hover:text-purple-600">
            {book.title}
          </span>
          <span className="text-sm text-gray-600 italic">
            by <span className="text-purple-600">{book.author}</span>
          </span>
          <span className="text-sm font-semibold text-gray-800">
            ${book.sellPrice}
          </span>
          <span className="text-yellow-500 font-bold">{book.rating}/5</span>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="mt-3 flex justify-center w-full">
        <AddToCart book={book} />
      </div>
    </div>
  );
};

export default BookCard;
