import React, { useEffect, useState } from "react";
import books from "../assets/books";
import DefaultLayout from "./DefaultLayout";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", price: "" });
  const [bookList, setBookList] = useState(books);
  const [numOfBooksToAdd, setNumOfBooksToAdd] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [addSuccessfull, setAddSuccessfull] = useState(false);
  const navigate = useNavigate();

  const maxNumberOfBooks = localStorage.getItem("maxNumberOfBooks");

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setNumOfBooksToAdd(inputValue);
  };

  const isValidPrice = (value) => {
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue) && floatValue >= 0) {
      const decimalCount = (floatValue.toString().split(".")[1] || "").length;
      return decimalCount <= 2;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPrice(bookPrice) === false) {
      alert("Please enter a valid price");
      setBookPrice("");
      return;
    }
    var passwd = prompt("Enter password");
    var attempts = 3;

    while (attempts >= 1) {
      if (passwd === "pargol") {
        if (books.length < numOfBooksToAdd) {
          console.log(book);
          books.push(book);
          const updatedBookList = [...bookList, book];
          setBookList(updatedBookList);
          console.log(updatedBookList);
          console.log(books);
          setAddSuccessfull(true);
          setTimeout(() => {
            setAddSuccessfull(false);
            //alert("Book has been added to the inventory.");
            setBookTitle("");
            setBookAuthor("");
            setBookPrice("");
            //navigate("/main-menu");
          }, 3000);
          return;
        } else {
          alert(
            `You have exceeded the maximum number of books allowed in the inventory.`
          );
          setBookTitle("");
          setBookAuthor("");
          setBookPrice("");
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


  useEffect(() => {
    setBookTitle("");
    setBookAuthor("");
    setBookPrice("");
    //setAddSuccessfull(false);
  }, [bookList]);
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
            required
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
                value={bookTitle}
                onChange={(e) => {
                  setBookTitle(e.target.value);
                  setBook({ ...book, [e.target.name]: e.target.value });
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
                  setBook({ ...book, [e.target.name]: e.target.value });
                }}
                type="text"
                name="author"
                id="author"
                required
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                value={bookPrice}
                onChange={(e) => {
                  setBookPrice(e.target.value);
                  setBook({ ...book, [e.target.name]: e.target.value });
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
        {numOfBooksToAdd > maxNumberOfBooks && numOfBooksToAdd ? (
          <div>
            <h3>
              You have exceeded the maximum number of books allowed in the
              inventory. Please try again.
            </h3>
          </div>
        ) : (
          ""
        )}

        <div style={{ margin: "20px" }}>
        {addSuccessfull && (
          <div>
            <h3>Book added successfully.</h3>
            </div>
            )}
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
