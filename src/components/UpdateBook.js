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
  const [selectedField, setSelectedField] = useState("title");

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  const isValidPrice = (value) => {
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue) && floatValue >= 0) {
      const decimalCount = (floatValue.toString().split('.')[1] || '').length;
      return decimalCount <= 2;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle !== "") {
      if(newAuthor === "" && newPrice === ""){
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
       } else {
        alert("You can only update one field at a time");
        setNewTitle("");
        setNewAuthor("");
        setNewPrice("");
       }
      
    } else if (newAuthor !== "") {
      if (newTitle === "" && newPrice === "") {
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
      } else {
        alert("You can only update one field at a time");
        setNewTitle("");
        setNewAuthor("");
        setNewPrice("");
      }
    } else if (newPrice !== "") {
      if (newTitle === "" && newAuthor === "") {
        if (isValidPrice(newPrice) === false) {
          alert("Please enter a valid price");
          setNewPrice("");
          return;
        }
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
        alert("You can only update one field at a time");
        setNewTitle("");
        setNewAuthor("");
        setNewPrice("");
      }
    } else {
      console.log("Something went wrong");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    //console.log("clicked");
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
    // setInputValue("");
    // setBookNumber("");
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
              <div className="update-field-container">
              <h4>What field would you like to update?</h4>
              <select value={selectedField} onChange={handleFieldChange}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="price">Price</option>
              </select>
              <form className="add-book-form" onSubmit={handleSubmit}>
                <div>
                {selectedField === "title" ? (
                  <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Enter new title"
                    type="text"
                    name="title"
                    id="title"
                  />
                ) : ""}
                </div>
                <div>
                {selectedField === "author" ? (
                  <input
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Enter new author"
                    type="text"
                    name="author"
                    id="author"
                  />
                ) : ""}
                </div>
                <div>
                {selectedField === "price" ? (
                  <input
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="Enter new price"
                    type="text"
                    name="price"
                    id="price"
                  />
                ) : ""}
                </div>
                <button type="submit" className="btn">
                  Update Book
                </button>
              </form>
              </div>
              
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
        <Link style={{marginTop: "20px"}} to="/main-menu" className="btn">
          Main Menu
        </Link>
      </DefaultLayout>
    </div>
  );
};

export default UpdateBook;
