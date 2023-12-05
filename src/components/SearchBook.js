import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const SearchBook = () => {
  return (
    <div className="home">
      <DefaultLayout>
        <h1>Search book</h1>
        <div style={{ margin: "50px" }}>
        <Link to="/show-book-author">By Author</Link>
        <Link to="/show-book-price">By Price</Link>
        </div>
        <div style={{ margin: "20px" }}>
            <Link to="/main-menu">Back to main menu</Link>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SearchBook;
