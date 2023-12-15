import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./wrapper/DefaultLayout";

const Home = () => {
  return (
    <div className="home">
      <DefaultLayout>
        <h1>Welcome to BookHub Management</h1>
        <p style={{ fontSize: "20px" }}>
          This is a simple inventory management system for books.
        </p>
        <Link to="/setup">Setup</Link>
      </DefaultLayout>
    </div>
  );
};

export default Home;
