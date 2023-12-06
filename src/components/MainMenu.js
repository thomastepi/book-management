import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import books from "../assets/books";

const MainMenu = () => {
  return (
    <div className="main-menu">
      <DefaultLayout>
        <h1>What do you wish to do</h1>
        <h2>Select from one of the following options</h2>
        <Link to="/add-book">Add Book</Link>
        <Link to="/update-book">Update Book</Link>
        <Link to="/delete-book">Delete Book</Link>
        <Link to="/search-book">Search Book</Link>
        <Link to="/quit">Quit</Link>
        <h2>Current Inventory</h2>
        <div>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black" }}>{book.title}</td>
                  <td style={{ border: "1px solid black" }}>{book.author}</td>
                  <td style={{ border: "1px solid black" }}>{book.ISBN}</td>
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
