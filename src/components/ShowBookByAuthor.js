import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import { Link } from "react-router-dom";
import books from "../assets/books";

const ShowBookByAuthor = () => {
  const [authorName, setAuthorName] = useState("");
  return (
    <div className="home">
      <DefaultLayout>
        <h1>Show book by author</h1>
        <form>
          <input
            placeholder="Enter Author Name"
            value={authorName}
            onChange={(e) => {
              setAuthorName(e.target.value);
            }}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
        <Link to="/main-menu">Return to Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default ShowBookByAuthor;
