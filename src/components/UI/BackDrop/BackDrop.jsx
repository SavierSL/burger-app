import React from "react";
import classes from "../BackDrop/BackDrop.css";

const backdrop = (props) => {
  return props.show ? (
    <div className="BackDrop" onClick={props.clicked}></div>
  ) : null;
};
export default backdrop;
