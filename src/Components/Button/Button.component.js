import React from "react";
import "./button.css";

const Button = ({ click, text }) => {
  return (
    <div className="Button">
      <button onClick={click}>{text}</button>
    </div>
  );
};

export default Button;
