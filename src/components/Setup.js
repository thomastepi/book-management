import React, { useState } from "react";
import { Link } from "react-router-dom";
import info from "../assets/data";
import DefaultLayout from "./DefaultLayout";

const Setup = () => {
  const [maxBooks, setMaxBooks] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaxBooks(inputValue);
    info.push(inputValue);
    console.log(info);
  };

  return (
    <div className="setup">
      <DefaultLayout>
        <h1>Setup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="maxNumberOfBooks">Maximum number of books</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="maxNumberOfBooks"
            id="maxNumberOfBooks"
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        {info.length > 0 && maxBooks >= 1 ? (
          <div>
            <h2>Maximum number of books has been set to {maxBooks}</h2>
            <Link to="/main-menu">Main Menu</Link>
          </div>
        ) : (
          ""
        )}
        {info.length > 0 && maxBooks < 1 && maxBooks !== "" ? (
          <div>
            <h2>Maximum number of books must be greater than 0</h2>
          </div>
        ) : (
          ""
        )}
      </DefaultLayout>
    </div>
  );
};

export default Setup;
