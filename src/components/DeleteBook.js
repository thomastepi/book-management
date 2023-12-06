import React, { useState } from "react";
import { Link } from "react-router-dom";
import books from "../assets/books";
import DefaultLayout from "./DefaultLayout";
import ConfirmDeleteBook from "./ConfirmDeleteBook";

const DeleteBook = () => {
  const [bookNumber, setBookNumber] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookNumber(inputValue);
    //books.splice(bookNumber - 1, 1);
    setInputValue("");
  };

  return (
    <div>
      <DefaultLayout>
        <h1>Delete a book</h1>
        <p>
          You can delete a book by entering its number below. The number of each
          book is shown in the list of books.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bookNumber">Book number:</label>
          <input
            type="text"
            id="bookNumber"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            required            
          />
          <button type="submit" className="btn">
            Delete book
          </button>

            {bookNumber <= books.length && bookNumber > 0 ? (
            <ConfirmDeleteBook bookNumber={bookNumber} />
            ) : (
            ""
            )}
        </form>

        <div style={{ margin: "20px" }}>
          <h2>Current Inventory</h2>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black" }}>{index + 1}</td>
                  <td style={{ border: "1px solid black" }}>{book.title}</td>
                  <td style={{ border: "1px solid black" }}>{book.author}</td>
                  <td style={{ border: "1px solid black" }}>{book.ISBN}</td>
                  <td style={{ border: "1px solid black" }}>${book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/main-menu">Back to main menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default DeleteBook;
