import React from "react";
import { Link } from "react-router-dom";
import books from "../assets/books";
import DefaultLayout from "./DefaultLayout";

const SearchBook = () => {
  return (
    <div className="home">
      <DefaultLayout>
        <h1>Search book</h1>
        <p style={{ fontSize: "20px" }}>
          You can search for a book by author or price.
        </p>
        {books.length !== 0 ? (
          <div style={{ margin: "50px" }}>
            <Link to="/show-book-author">By Author</Link>
            <Link to="/show-book-price">By Price</Link>
          </div>
        ) : (
          <p style={{ fontSize: "25px" }}>
            <b>Inventory is currently empty</b>
          </p>
        )}
        <div style={{ margin: "20px" }}>
          <Link to="/main-menu">Back to main menu</Link>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SearchBook;
