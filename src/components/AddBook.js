import React, { useEffect, useState, useContext } from "react";
import books from "../assets/books";
import DefaultLayout from "./DefaultLayout";
import BookClass from "../assets/BookClass";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import info from "../assets/data";
import BookContext from "../assets/BookContext";

const AddBook = () => {
  const [numOfBooksToAdd, setNumOfBooksToAdd] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [addSuccessfull, setAddSuccessfull] = useState(false);
  const { setBookInstance } = useContext(BookContext);
  const navigate = useNavigate();

  const maxBooks = info[info.length - 1];

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setNumOfBooksToAdd(inputValue);
  };

  function isValidInput(input) {
    const trimmedInput = input.trim();
    return trimmedInput !== '';
  }

  const isValidPrice = (value) => {
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue) && floatValue >= 0) {
      const decimalCount = (floatValue.toString().split(".")[1] || "").length;
      return decimalCount <= 2;
    }
    return false;
  };

  const isValidISBN = (isbn) => {
    return /^\d+$/.test(isbn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(maxBooks);
    if (isValidPrice(bookPrice) === false) {
      message.error("Please enter a valid price");
      setBookPrice("");
      return;
    }
    if (isValidISBN(ISBN) === false) {
      message.error("Please enter a valid ISBN");
      setISBN("");
      return;
    }

    if (isValidInput(bookTitle) === false || isValidInput(bookAuthor) === false) {
      message.error("Please enter a valid value");
      setBookTitle("");
      setBookAuthor("");
      return;
    }
    var passwd = prompt("Enter password");
    var attempts = 3;

    while (attempts >= 1) {
      if (passwd === "pargol") {
        if (books.length < numOfBooksToAdd) {
          const bookInstance = new BookClass(
            bookTitle,
            bookAuthor,
            ISBN,
            bookPrice
          );
          setBookInstance(bookInstance);
          books.push(bookInstance);
          message.success("Book added successfully");
          bookInstance.displayInfo();
          console.log("Number of books created in ", bookInstance.findNumberOfCreatedBooks())
          setAddSuccessfull(true);
          return;
        } else {
          message.error(
            `The inventory already contains the total number of books you indicated.`
          );
          setBookTitle("");
          setBookAuthor("");
          setBookPrice("");
          setISBN("");
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
      message.error("You have run out of attempts. Please try again later.");
      //alert("You have run out of attempts. Please try again later.");
      navigate("/main-menu");
    }
  };

  useEffect(() => {
    setBookTitle("");
    setBookAuthor("");
    setBookPrice("");
    setAddSuccessfull(false);
    setISBN("");
  }, [addSuccessfull]);

  return (
    <div className="add-book">
      <DefaultLayout>
        <h1>Add a book</h1>
        <h2>Maximum number of books allowed in the inventory: {maxBooks}</h2>
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
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        {parseInt(numOfBooksToAdd) <= maxBooks && numOfBooksToAdd > 0 ? (
          <form className="add-book-form" onSubmit={handleSubmit}>
            <h4>Number of books to add: {numOfBooksToAdd}</h4>
            <div>
              <label htmlFor="title">Title</label>
              <input
                value={bookTitle}
                onChange={(e) => {
                  setBookTitle(e.target.value);
                }}
                type="text"
                name="title"
                id="title"
                required
              />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                value={bookAuthor}
                onChange={(e) => {
                  setBookAuthor(e.target.value);
                }}
                type="text"
                name="author"
                id="author"
                required
              />
            </div>
            <div>
              <label htmlFor="ISBN">ISBN</label>
              <input
                value={ISBN}
                onChange={(e) => {
                  setISBN(e.target.value);
                }}
                type="text"
                name="ISBN"
                id="ISBN"
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                value={bookPrice}
                onChange={(e) => {
                  setBookPrice(e.target.value);
                }}
                type="text"
                name="price"
                id="price"
                required
              />
            </div>

            <button className="btn" type="submit">
              Add Book
            </button>
          </form>
        ) : (
          ""
        )}

        {parseInt(numOfBooksToAdd) < 1 && numOfBooksToAdd ? (
          <div>
            <h3>
              The number of books you wish to add must be greater than 0. Please
              try again.
            </h3>
          </div>
        ) : (
          ""
        )}
        {parseInt(numOfBooksToAdd) > maxBooks && numOfBooksToAdd ? (
          <div>
            <h3>
              The number of books you wish to add must be less than the maximum
              number of books allowed in the inventory. Please try again.
            </h3>
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
        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default AddBook;
