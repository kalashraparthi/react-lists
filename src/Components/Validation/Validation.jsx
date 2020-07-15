import React from "react";
import "./Validation.css";

const validation = (props) => {
  return (
    <div className="Validation">
      <p>Length: {props.length >= 5 ? "Text Long Enough" : "Text Too Short"}</p>
    </div>
  );
};
export default validation;
