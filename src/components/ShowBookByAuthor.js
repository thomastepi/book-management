import React, { useState } from "react";
import DefaultLayout from "./wrapper/DefaultLayout";
import { message } from "antd";
import { Link } from "react-router-dom";
import books from "../data/books";
import { isValidInput } from "../utils/inputValidations";

const ShowBookByAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  const [bookList] = useState(books);
  const [bookMatches, setBookMatches] = useState([]);
  var bookFound = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidInput(authorName) === false) {
      message.warning("Please enter a valid author name");
      setAuthorName("");
      setBookMatches([]);
      return;
    }
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].getAttributeValue("author") === authorName) {
        bookFound.push(bookList[i]);
        setBookMatches(bookFound);
        setAuthorName("");
      }
    }
    if (bookFound.length === 0) {
      message.warning("No Books Found");
      setAuthorName("");
      setBookMatches([]);
    }
    console.log(bookMatches);
  };

  return (
    <div className="home">
      <DefaultLayout>
        <h1>Show book by author</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Author Name"
            value={authorName}
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
            required
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        {bookMatches.length !== 0 ? (
          <div style={{ margin: "20px" }}>
            <h4>{bookMatches.length} book(s) found</h4>
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
                {bookMatches.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black" }}>{item.title}</td>
                    <td style={{ border: "1px solid black" }}>{item.author}</td>
                    <td style={{ border: "1px solid black" }}>{item.ISBN}</td>
                    <td style={{ border: "1px solid black" }}>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
        <div style={{ marginTop: "20px" }}>
          <Link to="/main-menu">Return to Main Menu</Link>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ShowBookByAuthor;
