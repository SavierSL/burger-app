import React, { Component } from "react";
import CheckoutSummary from "../container/checkoutSummary/CheckoutSummary";
import Burger from "../burger/Burger";
import Forms from "../Checkout/forms/Forms";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    contact: false,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let totalPrice = null;
    const ingredients = {};
    console.log(query);

    for (let param of query.entries()) {
      if (param[0] === "totalPrice") {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: totalPrice,
    });
    console.log(totalPrice);
  }
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
    this.setState({ contact: true });
  };

  render() {
    let checkoutFrom = (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancel={this.checkoutCancelHandler}
          continue={this.checkoutContinueHandler}
        />
        <Route
          path={"/checkout/contact-data"}
          exact
          render={(props) => (
            <Forms
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
    if (this.state.contact) {
      checkoutFrom = (
        <Route
          path={"/checkout/contact-data"}
          exact
          render={(props) => (
            <Forms
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      );
    }
    return <div>{checkoutFrom}</div>;
  }
}

export default withRouter(Checkout);
