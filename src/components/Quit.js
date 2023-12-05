import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const Quit = () => {
  return (
    <div className="quit">
      <DefaultLayout>
        <h1>Are you sure you want to quit?</h1>
        <Link to="/quit-message">Yes</Link>
        <Link to="/main-menu">No</Link>
      </DefaultLayout>
    </div>
  );
};

export default Quit;