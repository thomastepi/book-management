import React, { useEffect, useState } from "react";
import DefaultLayout from "./DefaultLayout";
import books from "../assets/books";
import { Link } from "react-router-dom";

const UpdateBook = () => {
  const [bookList, setBookList] = useState(books);
  const [bookNumber, setBookNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [bookToUpdate, setBookToUpdate] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //let bookNumberSelected = bookNumber - 1;
    if (newTitle !== "") {
      setBookList((prevBookList) => {
        const updatedBookList = [...prevBookList];
        updatedBookList[bookNumber - 1].title = newTitle;
        return updatedBookList;
      });
      let id = bookNumber - 1;
      for (let i = 0; i < books.length; i++) {
        if (i === id) {
          books[i].title = bookList[i].title;
        }
      }
      console.log(books);
    } else if (newAuthor !== "") {
      setBookList((prevBookList) => {
        const updatedBookList = [...prevBookList];
        updatedBookList[bookNumber - 1].author = newAuthor;
        return updatedBookList;
      });
      let id = bookNumber - 1;
      for (let i = 0; i < books.length; i++) {
        if (i === id) {
          books[i].author = bookList[i].author;
        }
      }
    } else if (newPrice !== "") {
      setBookList((prevBookList) => {
        const updatedBookList = [...prevBookList];
        updatedBookList[bookNumber - 1].price = newPrice;
        return updatedBookList;
      });
      let id = bookNumber - 1;
      for (let i = 0; i < books.length; i++) {
        if (i === id) {
          books[i].price = bookList[i].price;
        }
      }
    } else {
      console.log("Please enter a valid value");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setBookNumber(inputValue);
    console.log(bookNumber);
    setBookToUpdate(bookList[bookNumber - 1]);
    console.log(bookToUpdate);
  };

  // reset input values after submit
  useEffect(() => {
    setNewTitle("");
    setNewAuthor("");
    setNewPrice("");
    setInputValue("");
    setBookNumber("");
  }, [bookList]);
  return (
    <div className="update-book">
      <DefaultLayout>
        <h1>Update a book</h1>
        <div>
          <label htmlFor="book-number">Enter the book number</label>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="book-number"
            id="book-number"
            value={inputValue}
          />
          <button onClick={handleClick} type="submit" className="btn">
            Submit
          </button>
          {bookNumber <= bookList.length && bookNumber > 0 ? (
            <>
              <h3>
                You have selected <em> {bookList[bookNumber - 1].title} </em> by
                <em> {bookList[bookNumber - 1].author} </em>{" "}
              </h3>
              <form className="add-book-form" onSubmit={handleSubmit}>
                <div>
                  <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter new title"
                    type="text"
                    name="title"
                    id="title"
                  />
                </div>
                <div>
                  <input
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Enter new author"
                    type="text"
                    name="author"
                    id="author"
                  />
                </div>
                <div>
                  <input
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="Enter new price"
                    type="text"
                    name="price"
                    id="price"
                  />
                </div>
                <button type="submit" className="btn">
                  Update Book
                </button>
              </form>
            </>
          ) : (
            ""
          )}
          {(bookNumber > bookList.length && bookNumber) ||
          (bookNumber <= 0 && bookNumber) ? (
            <h3>
              Please enter a valid book number between 1 and {bookList.length}
            </h3>
          ) : (
            ""
          )}
        </div>

        <div>
          <h2>Current Inventory</h2>
          <table style={{ margin: "0 auto", border: "1px solid black" }}>
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black" }}>{index + 1}</td>
                  <td style={{ border: "1px solid black" }}>{book.title}</td>
                  <td style={{ border: "1px solid black" }}>{book.author}</td>
                  <td style={{ border: "1px solid black" }}>${book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/main-menu" className="btn">
          Main Menu
        </Link>
      </DefaultLayout>
    </div>
  );
};

export default UpdateBook;
