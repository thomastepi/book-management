import React from "react";
import "../../assets/style/defaultLayout.css";

const DefaultLayout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <h1>BookHub!</h1>
      </div>
      <div className="content" style={{overflow: "scroll"}}>{props.children}</div>
      <div className="footer">
        <p>© 2023 BookHub, Inc.</p>
      </div>
    </div>
  );
};

export default DefaultLayout;
