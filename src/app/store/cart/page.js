"use client";

import { useContext, useState } from "react";
import { MyContext } from "@/contextAPI/MyContext";
import Image from "next/image";

export default function Cart() {
  const { myData, setMyData } = useContext(MyContext);
  const [cartData, setCartData] = useState(myData || []);

  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
    setMyData(updatedCart);
  };

  return (
    <div className="md:ml-60 p-4 md:p-6 bg-white rounded-lg shadow-lg h-full overflow-y-auto overflow-x-hidden">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
        Your Cart
      </h1>
      {cartData.length > 0 ? (
        <ul className="flex flex-col gap-4 md:gap-6">
          {cartData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm transition-transform transform hover:scale-105"
            >
              <Image
                src={item.cover}
                width={80}
                height={120}
                className="rounded-md shadow-md mb-3 md:mb-0"
                alt={item.title}
              />
              <div className="flex flex-col md:flex-row items-center gap-4 flex-grow">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-md md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 italic">
                    by {item.author}
                  </p>
                </div>
                <p className="text-md md:text-lg font-semibold text-gray-800">
                  ${item.sellPrice}
                </p>
              </div>
              <button
                className="mt-3 md:mt-0 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Your cart is empty.
        </p>
      )}
      {cartData.length > 0 && (
        <div className="flex justify-end mt-6">
          <p className="text-lg md:text-xl font-semibold text-gray-900">
            Total: $
            {cartData.reduce((acc, curr) => acc + curr.sellPrice, 0).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
