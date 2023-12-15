import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import books from "../data/books";

const ConfirmDeleteBook = (props) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    var passwd = prompt("Enter password");
    var attempts = 3;
    while (attempts >= 1) {
      if (passwd === "pargol") {
        books.splice(props.bookNumber - 1, 1);
        message.success("Book Deleted");
        navigate("/main-menu");
        return;
      } else if (attempts > 1) {
        alert(`Incorrect password. You have ${attempts - 1} attempts left.`);
        passwd = prompt("Re-enter password");
      }
      attempts--;
    }
    if (attempts === 0) {
      message.error("You have run out of attempts. Please try again later.");
      navigate("/main-menu");
    }
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    navigate("/main-menu");
  };

  return (
    <div className="confirm-delete-book">
      <div
        style={{
          margin: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h5 style={{ margin: "0px" }}>
          Are you sure you want to delete this book?
        </h5>
        <h6 style={{ margin: "0px" }}>This process cannot be undone</h6>
        <button type="button" className="btn" onClick={handleClick}>
          Confirm
        </button>
        <button type="button" className="btn" onClick={handleClick2}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteBook;
