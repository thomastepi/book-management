import React, { useEffect, useState } from "react";
import DefaultLayout from "./DefaultLayout";
import books from "../assets/books";
import { Link, useNavigate } from "react-router-dom";

const UpdateBook = () => {
  const [bookList, setBookList] = useState(books);
  const [bookNumber, setBookNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newISBN, setNewISBN] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [selectedField, setSelectedField] = useState("title");
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

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
    if (isValidPrice(newPrice) === false && newPrice !== "") {
      alert("Please enter a valid price");
      setNewPrice("");
      return;
    }

    if (isValidISBN(newISBN) === false && newISBN !== "") {
      alert("Please enter a valid ISBN");
      setNewISBN("");
      return;
    }
    var passwd = prompt("Enter password");
    var attempts = 3;

    while (attempts >= 1) {
      if (passwd === "pargol") {
        if (newTitle !== "") {
          setBookList((prevBookList) => {
            const updatedBookList = [...prevBookList];
            updatedBookList[bookNumber - 1].modifyAttribute("title", newTitle);
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
            updatedBookList[bookNumber - 1].modifyAttribute(
              "author",
              newAuthor
            );
            return updatedBookList;
          });
          let id = bookNumber - 1;
          for (let i = 0; i < books.length; i++) {
            if (i === id) {
              books[i].author = bookList[i].author;
            }
          }
        } else if (newISBN !== "") {
          setBookList((prevBookList) => {
            const updatedBookList = [...prevBookList];
            updatedBookList[bookNumber - 1].modifyAttribute("ISBN", newISBN);
            return updatedBookList;
          });
          let id = bookNumber - 1;
          for (let i = 0; i < books.length; i++) {
            if (i === id) {
              books[i].ISBN = bookList[i].ISBN;
            }
          }
        } else if (newPrice !== "") {
          setBookList((prevBookList) => {
            const updatedBookList = [...prevBookList];
            updatedBookList[bookNumber - 1].modifyAttribute("price", newPrice);
            return updatedBookList;
          });
          let id = bookNumber - 1;
          for (let i = 0; i < books.length; i++) {
            if (i === id) {
              books[i].price = bookList[i].price;
            }
          }
        } else {
          console.log("Something went wrong");
        }
        return;
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

  const handleClick = (e) => {
    e.preventDefault();
    setBookNumber(inputValue);
  };

  // reset input values after submit
  useEffect(() => {
    setNewTitle("");
    setNewAuthor("");
    setNewISBN("");
    setNewPrice("");
  }, [bookList]);
  return (
    <div className="update-book">
      <DefaultLayout>
        <h1>Update a book</h1>
        <p>
          You can update a book by entering its number below. The number of each
          book is shown in the list of books.
        </p>
        <div>
          <label htmlFor="book-number">Enter the book number</label>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="book-number"
            id="book-number"
            value={inputValue}
            required
          />
          <button onClick={handleClick} type="submit" className="btn">
            Submit
          </button>
          {bookNumber <= bookList.length && bookNumber > 0 ? (
            <>
              <h3>
                You have selected <em> {bookList[bookNumber - 1].title} </em> by
                <em> {bookList[bookNumber - 1].author}</em>. Price of book:{" "}
                {<em> ${bookList[bookNumber - 1].price} </em>}
              </h3>
              <div className="update-field-container">
                <h4>What field would you like to update?</h4>
                <select value={selectedField} onChange={handleFieldChange}>
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="ISBN">ISBN</option>
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
                        required
                      />
                    ) : (
                      ""
                    )}
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
                        required
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    {selectedField === "ISBN" ? (
                      <input
                        value={newISBN}
                        onChange={(e) => setNewISBN(e.target.value)}
                        placeholder="Enter new ISBN"
                        type="text"
                        name="ISBN"
                        id="ISBN"
                        required
                      />
                    ) : (
                      ""
                    )}
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
                        required
                      />
                    ) : (
                      ""
                    )}
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
              {bookList.map((book, index) => (
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
        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default UpdateBook;
