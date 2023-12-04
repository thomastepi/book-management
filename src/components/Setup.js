import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const Setup = () => {
  const [maxNumberOfBooks, setMaxNumberOfBooks] = useState("");
  const [currentMaxNumberOfBooks, setCurrentMaxNumberOfBooks] = useState("");
  //const [maxBooks, setMaxBooks] = useState(false);

  useEffect(() => {
    const storedMaxNumberOfBooks = localStorage.getItem("maxNumberOfBooks");
    if (storedMaxNumberOfBooks) {
      setCurrentMaxNumberOfBooks(Number(storedMaxNumberOfBooks));
    }
  }, [currentMaxNumberOfBooks]);

  const handleSubmit = (e) => {
    //e.preventDefault();
    localStorage.setItem("maxNumberOfBooks", maxNumberOfBooks);
    console.log(localStorage.getItem("maxNumberOfBooks"));
    //setMaxBooks(true);
    // setMaxNumberOfBooks("");
  };

  return (
    <div className="setup">
      <DefaultLayout>
        <h1>Setup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="maxNumberOfBooks">Maximum number of books</label>
          <input
            onChange={(e) => setMaxNumberOfBooks(e.target.value)}
            type="text"
            name="maxNumberOfBooks"
            id="maxNumberOfBooks"
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
          {currentMaxNumberOfBooks && (
            <div>
              <h2>
                Maximum number of books has been set to{" "}
                {currentMaxNumberOfBooks}
              </h2>
            </div>
          )}
        </form>
        <Link to="/main-menu">Main Menu</Link>
      </DefaultLayout>
    </div>
  );
};

export default Setup;
