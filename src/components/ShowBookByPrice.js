import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import { Link } from "react-router-dom";
import books from "../assets/books";

const ShowBookByPrice = () => {
  const [price, setPrice] = useState("");
  const [bookList] = useState(books);
  const [bookMatches, setBookMatches] = useState([]);
  const [matchFound, setMatchFound] = useState(true);
  var bookFound = [];

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
    if (isValidPrice(price) === false) {
      alert("Please enter a valid price");
      setPrice("");
      return;
    }
    for (let i = 0; i < bookList.length; i++) {
      if (bookList[i].price === price) {
        bookFound.push(bookList[i]);
        setBookMatches(bookFound);
      }
    }
    if (bookFound.length === 0) {
      setMatchFound(false);
      setTimeout(() => {
        setMatchFound(true);
        setPrice("");
        setBookMatches([]);
      }, 4000);
    }
    console.log(bookMatches);
  };

  return (
    <div className="home">
      <DefaultLayout>
        <h1>Search book by Price</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
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
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {bookMatches.map((item, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black" }}>{item.title}</td>
                    <td style={{ border: "1px solid black" }}>{item.author}</td>
                    <td style={{ border: "1px solid black" }}>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No books found with price of ${price}</h2>
        )}

        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default ShowBookByPrice;
