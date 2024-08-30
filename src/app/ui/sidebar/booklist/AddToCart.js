// make a component having  add to cart feature
"use client";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { MyContext } from "../../../../contextAPI/MyContext";
import Image from "next/image";

const AddToCart = ({ book }) => {
  const { myData, setMyData } = useContext(MyContext);
  const handleClick = (reason) => {
    const newData = { ...book, type: reason };
    setMyData([...myData, newData]);
    console.log(`Added ${book.title} to cart`);
  };

  return (
    <div className="flex  items-center">
      <button
        onClick={() => handleClick("buy")}
        className="flex items-center justify-center p-4 text-sm font-medium text-gray-900 hover:bg-gray-100 group md:text-md transition duration-300 ease-in-out hover:shadow-md"
      >
        <IoCartOutline className="text-2xl" />
      </button>

      <button
        onClick={() => handleClick("rent")}
        className="flex items-center justify-center p-4 text-sm font-medium text-gray-900  hover:bg-gray-100 group md:text-md transition duration-300 ease-in-out hover:shadow-md"
      >
        <p>Rent</p>
      </button>
    </div>
  );
};

export default AddToCart;
