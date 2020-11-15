import React, { Component } from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less" onClick={props.delete} disabled={props.disabled}>
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
