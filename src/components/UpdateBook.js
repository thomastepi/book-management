import React from "react";

const UpdateBook = () => {
  return (
    <div className="update-book">
      <h1>Update a book</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" id="price" />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;