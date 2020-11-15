import React from "react";
import Burger from "../../burger/Burger";
import classes from "../../burger/OrderSummary./OrderSummary.css";
import Button from "../../UI/Model/Button";
const checkoutSummary = (props) => {
  return (
    <div className="CheckOut">
      <h2>We hope you like it!</h2>
      <Burger ingredients={props.ingredients} />
      <Button btn="Cancel" clicked={props.cancel}>
        Cancel
      </Button>
      <Button btn="Checkout" clicked={props.continue}>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
