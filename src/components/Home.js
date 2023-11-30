import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const Home = () => {
  return (
    <div className="home">
      <DefaultLayout>
        <h1>Welcome to BookHub Management</h1>
        <Link to="/setup">Setup</Link>
      </DefaultLayout>
    </div>
  );
};

export default Home;
