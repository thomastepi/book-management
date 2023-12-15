import React, { createContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookInstance, setBookInstance] = useState(null);

  return (
    <BookContext.Provider value={{ bookInstance, setBookInstance }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
