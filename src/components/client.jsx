"use client";
// import { hasCustomGetInitialProps } from "next/dist/build/utils";
// import { useState } from "react";
import React, { createContext, useState } from "react";

export const dataContext = createContext();
export const ContextProvider = ({ children }) => {
  const [userdata, setuserData] = useState(null);

  return (
    <dataContext.Provider value={{ userdata, setuserData }}>
      {children}
    </dataContext.Provider>
  );
};
