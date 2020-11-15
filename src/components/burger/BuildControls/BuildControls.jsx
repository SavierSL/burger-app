import React, { Component } from "react";
import classes from "../BuildControls/BuildControls.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <h4>Total Price: $ {props.prices}</h4>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            delete={() => props.ingredientDeleted(control.type)}
            disabled={props.disabled[control.type]}
          />
        );
      })}
      <button
        className="OrderButton"
        disabled={props.purchase}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
