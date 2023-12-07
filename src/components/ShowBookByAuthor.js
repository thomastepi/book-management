import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import { Link } from "react-router-dom";
import books from "../assets/books";

const ShowBookByAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  const [bookList] = useState(books);
  const [bookMatches, setBookMatches] = useState([]);
  const [matchFound, setMatchFound] = useState(true);
  var bookFound = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].getAttributeValue("author") === authorName) {
        bookFound.push(bookList[i]);
        setBookMatches(bookFound);
      }
    }
    if (bookFound.length === 0) {
      setMatchFound(false);
      setTimeout(() => {
        setMatchFound(true);
        setAuthorName("");
        setBookMatches([]);
      }, 1000);
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
        {matchFound ? (
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
          <h2>No books found with author name, {authorName}</h2>
        )}
        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default ShowBookByAuthor;
