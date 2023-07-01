import React from "react";
import stylesheet from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={stylesheet.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
