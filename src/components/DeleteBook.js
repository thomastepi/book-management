import React, { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/books";
import { isValidBookNumber } from "../utils/inputValidations";
import { message } from "antd";
import DefaultLayout from "./wrapper/DefaultLayout";
import ConfirmDeleteBook from "./ConfirmDeleteBook";

const DeleteBook = () => {
  const [bookNumber, setBookNumber] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidBookNumber(inputValue) === false) {
      message.warning("Please enter a valid book number");
      setInputValue("");
      return;
    }
    setBookNumber(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <DefaultLayout>
        <h1>Delete a book</h1>
        <p style={{ fontSize: "20px" }}>
          You can delete a book by entering its number below. The number of each
          book is shown in the list of books.
        </p>
        <form onSubmit={handleSubmit}>
          {books.length === 0 ? (
            <p>
              <b>Inventory is currently empty</b>
            </p>
          ) : (
            <div>
              <label htmlFor="bookNumber">Book number</label>
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
            </div>
          )}
          {bookNumber <= books.length && bookNumber > 0 ? (
            <>
              <p>
                You have selected{" "}
                <em>
                  <strong>
                    {books[bookNumber - 1].getAttributeValue("title")}
                  </strong>
                </em>{" "}
                by{" "}
                <em>
                  <strong>
                    {books[bookNumber - 1].getAttributeValue("author")}
                  </strong>
                </em>
              </p>
              <ConfirmDeleteBook bookNumber={bookNumber} />
            </>
          ) : (
            ""
          )}

          {(bookNumber > books.length || bookNumber <= 0) && bookNumber ? (
            <p>
              <strong>
                There is no book with that number. Please try again
              </strong>
            </p>
          ) : (
            ""
          )}
        </form>
        {books.length !== 0 && (
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
        )}
        <div style={{ marginTop: "20px" }}>
          <Link to="/main-menu">Back to main menu</Link>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default DeleteBook;
