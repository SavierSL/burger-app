import React from "react";
import classes from "../orders/Order.css";

const order = (props) => {
  const ingredients = props.ingredients;
  const newIngredients = [];

  for (let ing in ingredients) {
    newIngredients.push(ing + "(" + ingredients[ing] + ")");
  }
  console.log(newIngredients);
  return (
    <div className="order">
      <p>Ingredients: {newIngredients.join(" ")}</p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default order;
