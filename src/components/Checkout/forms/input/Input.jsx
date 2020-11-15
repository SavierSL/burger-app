import React from "react";
import classes from "../input/Input.css";

const input = (props) => {
  let inputElement = null;
  switch (props.inputmodel) {
    case "text":
      inputElement = (
        <input className="input-text" onChange={props.changed} {...props} />
      );
    case "textarea":
      inputElement = (
        <textarea className="input-text" onChange={props.changed} {...props} />
      );
    default:
      inputElement = (
        <input className="input-text" onChange={props.changed} {...props} />
      );
  }
  return (
    <div className="input-form">
      <label className="label-container">{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
