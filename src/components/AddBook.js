import React from "react";
import { useState } from "react";
import books from "../assets/books";
import DefaultLayout from "./DefaultLayout";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", price: "" });
  const [bookList, setBookList] = useState(books);
  const [numOfBooksToAdd, setNumOfBooksToAdd] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const maxNumberOfBooks = localStorage.getItem("maxNumberOfBooks");

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setNumOfBooksToAdd(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var passwd = prompt("Enter password");
    var attempts = 3;

    while (attempts >= 1) {
      if (passwd === "pargol") {
        if (books.length < numOfBooksToAdd) {
          books.push(book);
          const updatedBookList = [...bookList, book];
          setBookList(updatedBookList);
          console.log(updatedBookList);
          console.log(books);
          return;
        } else {
          alert(
            `You have exceeded the maximum number of books allowed in the inventory.`
          );
          //navigate("/main-menu");
          return;
        }
      } else if (attempts > 1) {
        alert(`Incorrect password. You have ${attempts - 1} attempts left.`);
        passwd = prompt("Re-enter password");
      }
      attempts--;
    }
    if (attempts === 0) {
      alert("You have run out of attempts. Please try again later.");
      navigate("/main-menu");
    }
  };
  return (
    <div className="add-book">
      <DefaultLayout>
        <h1>Add a book</h1>
        <form onSubmit={handleSubmit2}>
          <label htmlFor="numOfBooksToAdd">Number of Books to add</label>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            type="text"
            name="numOfBooksToAdd"
            id="numOfBooksToAdd"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        {numOfBooksToAdd <= maxNumberOfBooks && numOfBooksToAdd ? (
          <form className="add-book-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                onChange={handleChange}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                onChange={handleChange}
                type="text"
                name="author"
                id="author"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                onChange={handleChange}
                type="text"
                name="price"
                id="price"
              />
            </div>

            <button className="btn" type="submit">
              Add Book
            </button>
          </form>
        ) : (
          ""
        )}
        {numOfBooksToAdd > maxNumberOfBooks && numOfBooksToAdd ? (
          <div>
            <h2>
              You have exceeded the maximum number of books allowed in the
              inventory. Please try again.
            </h2>
          </div>
        ) : (
          ""
        )}

        <div style={{ margin: "20px" }}>
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
        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default AddBook;
