"use client";

import { MyContext } from "./MyContext";
import { useState } from "react";

export const MyProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);

  return (
    <MyContext.Provider value={{ myData, setMyData }}>
      {children}
    </MyContext.Provider>
  );
};
