import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

const QuitMessage = () => {
  return (
    <div className="quit-message">
      <DefaultLayout>
        <h1>Thank you for using the BookHub Inventory System</h1>
        <Link to="/setup">Return to Setup</Link>
      </DefaultLayout>
    </div>
  );
};

export default QuitMessage;
