import React from "react";
import "../assets/header.css"

const DefaultLayout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <h1>BookHub!</h1>
      </div>
      <div className="content">{props.children}</div>
    </div>
    );
};

export default DefaultLayout;