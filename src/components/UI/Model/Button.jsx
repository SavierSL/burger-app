import React, { useDebugValue } from "react";
import classes from "../Model/Button.css";

const button = (props) => {
  return (
    <button className={props.btn} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
