import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import books from "../assets/books";
import { Link } from "react-router-dom";

const UpdateBook = () => {
  const [bookList, setBookList] = useState(books);
  const [bookNumber, setBookNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [bookToUpdate, setBookToUpdate] = useState({});
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setBookNumber(inputValue);
    console.log(bookNumber);
    setBookToUpdate(bookList[bookNumber - 1]);
    console.log(bookToUpdate);
  };
  
  console.log(bookToUpdate);

  const handleChange = (e) => {
    const { name, value } = e.target;

  // Update the bookToUpdate state
  setBookToUpdate((prevBookToUpdate) => ({
    ...prevBookToUpdate,
    [name]: value,
  }));
  };

  function updateTitle(e) {
    e.preventDefault();
    setBookToUpdate((prevBookToUpdate) => ({
      ...prevBookToUpdate,
      title: bookToUpdate.title,
    }));
    // update bookList array with updated book
    setBookList((prevBookList) => {
      const updatedBookList = [...prevBookList];
      updatedBookList[bookNumber - 1] = bookToUpdate;
      return updatedBookList;
    });
    let id = bookNumber - 1;
    for (let i = 0; i < books.length; i++) {
      if (i === id) {
        books[i].title = bookToUpdate.title;
      }
    }
    // [books] = [...books, bookList];
    console.log("updated book list")
    console.log(bookList);
  }
  
  function updateAuthor(e) {
    e.preventDefault();
    setBookToUpdate((prevBookToUpdate) => ({
      ...prevBookToUpdate,
      author: bookToUpdate.author,
    }));
    // update bookList array with updated book
    setBookList((prevBookList) => {
      const updatedBookList = [...prevBookList];
      updatedBookList[bookNumber - 1] = bookToUpdate;
      return updatedBookList;
    });
    let id = bookNumber - 1;
    for (let i = 0; i < books.length; i++) {
      if (i === id) {
        books[i].author = bookToUpdate.author;
      }
    }
  }

  function updatePrice(e) {
    e.preventDefault();
    setBookToUpdate((prevBookToUpdate) => ({
      ...prevBookToUpdate,
      price: bookToUpdate.price,
    }));
    // update bookList array with updated book
    setBookList((prevBookList) => {
      const updatedBookList = [...prevBookList];
      updatedBookList[bookNumber - 1] = bookToUpdate;
      return updatedBookList;
    });
    let id = bookNumber - 1;
    for (let i = 0; i < books.length; i++) {
      if (i === id) {
        books[i].price = bookToUpdate.price;
      }
    }
  }
  // reset input fields
  ;

  
  

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
          <button onClick={handleClick} type="button" className="btn">
            Submit
          </button>
          {bookNumber <= bookList.length && bookNumber > 0 ? (
            <h3>
              You have selected <em> {bookList[bookNumber - 1].title} </em> by
              <em> {bookList[bookNumber - 1].author} </em>{" "}
            </h3>
          ) : (
            ""
          )}
          {(bookNumber > bookList.length && bookNumber) ||
          (bookNumber <= 0 && bookNumber) ? (
            <h3>
              There is no book associated with that number in the inventory the book number is {bookNumber}
            </h3>
          ) : (
            ""
          )}
        </div>
        <form className="add-book-form" >
          <div>
            {/* <label htmlFor="title">Title</label> */}
            <input
              onChange={handleChange}
              placeholder="Enter new title"
              type="text"
              name="title"
              id="title"
            />
            <button onClick={updateTitle} className="btn">Update Title</button>
          </div>
          <div>
            {/* <label htmlFor="author">Author</label> */}
            <input
              onChange={handleChange}
              placeholder="Enter new author"
              type="text"
              name="author"
              id="author"
            />
            <button onClick={updateAuthor} className="btn">Update Author</button>
          </div>
          <div>
            {/* <label htmlFor="price">Price</label> */}
            <input
              onChange={handleChange}
              placeholder="Enter new price"
              type="text"
              name="price"
              id="price"
            />
            <button onClick={updatePrice} className="btn">Update Price</button>
          </div>
          {/* <button className="btn" type="submit">
            Update Book
          </button> */}

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
        </form>
        <Link to="/main-menu" className="btn">
          Main Menu
        </Link>
      </DefaultLayout>
    </div>
  );
};

export default UpdateBook;
