import React from "react";
import "./Char.css";

const char = (props) => {
  return (
    <div className="Char">
      <p onClick={props.click}>{props.text}</p>
    </div>
  );
};

export default char;
