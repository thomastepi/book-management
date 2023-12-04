import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import books from "../assets/books";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <DefaultLayout>
        <h1>What do you wish to do</h1>
        <h2>Books</h2>
        <Link to="/add-book">Add Book</Link>
        <Link to="/update-book">Update Book</Link>
        <Link to="/show-book-author">Search Book by author</Link>
        <Link to="/show-book-price">Search Book by price</Link>
        <h2>Current Inventory</h2>
        <div>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black" }}>{book.title}</td>
                  <td style={{ border: "1px solid black" }}>{book.author}</td>
                  <td style={{ border: "1px solid black" }}>${book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default MainMenu;
