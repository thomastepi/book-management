import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./wrapper/DefaultLayout";

const Quit = () => {
  return (
    <div className="quit">
      <DefaultLayout>
        <h1>Are you sure you want to quit?</h1>
        <div>
          <p style={{ fontSize: "20px" }}>
            If you quit, you will be taken back to setup.
          </p>
        </div>
        <Link to="/quit-message">Yes</Link>
        <Link to="/main-menu">No</Link>
      </DefaultLayout>
    </div>
  );
};

export default Quit;
