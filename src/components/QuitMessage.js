import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const QuitMessage = () => {
  return (
    <div className="quit-message">
      <DefaultLayout>
        <h1>Thank you for using the BookHub Inventory System</h1>
        <div>
          <p style={{ fontSize: "20px" }}>
            We hope to see you again soon!
          </p>
        </div>
        <Link to="/home">Return to Home</Link>
      </DefaultLayout>
    </div>
  );
};

export default QuitMessage;
