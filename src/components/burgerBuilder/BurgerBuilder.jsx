import React, { Component } from "react";
import Burger from "../burger/Burger";
import BuildControls from "../burger/BuildControls/BuildControls";
import Model from "../UI/Model/Model";
import OrderSummary from "../../components/burger/OrderSummary./OrderSummary";
import BackDrop from "../UI/BackDrop/BackDrop";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/spinner/Spinner";
import errorHandler from "../../components/errorHandler/errorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 0.5,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
    purchaseable: true,
    order: false,
    loading: false,
    error: false,
  };
  componentDidMount() {
    axios
      .get("https://burger-project-933a5.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({
          ingredients: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      });
  }

  addIngredientHandler = (type) => {
    const ingredients = this.state.ingredients[type];

    const addedIng = ingredients + 1;
    const newIng = { ...this.state.ingredients };
    newIng[type] = addedIng;
    const ingPrices = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + ingPrices;
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice,
    });

    // const oldCount = this.state.ingredients[type];
    // const updatedCount = oldCount + 1;
    // const updatedIngredient = {
    //   ...this.state.ingredients,
    // };
    // updatedIngredient[type] = updatedCount;
    // const priceAdd = INGREDIENT_PRICES[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + priceAdd;
    // this.setState({
    //   totalPrice: newPrice,
    //   ingredients: updatedIngredient,
    // });
  };
  deleteIngredientHandler = (type) => {
    const ingredients = this.state.ingredients[type];
    if (ingredients <= 0) {
      return;
    }
    const addedIng = ingredients - 1;
    const newIng = { ...this.state.ingredients };
    newIng[type] = addedIng;
    const ingPrices = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - ingPrices;
    this.setState({
      ingredients: newIng,
      totalPrice: newPrice,
    });
  };
  handleOrder = () => {
    const order = true;
    this.setState({
      order: order,
    });
  };
  orderHandler = () => {
    this.setState({ loading: false, order: true });
  };
  cancelhandler = () => {
    this.setState({ order: false });
  };
  handleCheckout = () => {
    // this.setState({ loading: true });
    // // alert("Continue Checkout?");
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Xave",
    //       street: "Naga",
    //       zone: 3,
    //       country: "Mars",
    //     },
    //     email: "yeah@gmail.com",
    //     deliveryMethod: "fastest",
    //   },
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then(this.setState({ order: false }))
    //   .catch(this.setState({ order: false }));
    console.log(this.state.ingredients);
    const queyParams = [];

    for (let i in this.state.ingredients) {
      queyParams.push(i + "=" + this.state.ingredients[i]);
    }
    queyParams.push("totalPrice=" + this.state.totalPrice);
    const queryString = queyParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: queryString,
    });
  };

  render() {
    // LESS
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    /////////////////////////
    let orderSummary = null;

    ////////////////////////////
    // ORDER
    let disableOrder = {
      ...this.state.purchaseable,
    };
    disableOrder = this.state.totalPrice <= 0 || this.state.order === true;
    const ingredientsSummary = { ...this.state.ingredients };
    const newSummary = Object.keys(ingredientsSummary);

    const ingredientNumbersSum = { ...this.state.ingredients };
    const newNumberSum = Object.values(ingredientNumbersSum);

    let burger = this.state.error ? <p>Cannot be loaded</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            prices={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientDeleted={this.deleteIngredientHandler}
            disabled={disableInfo}
            purchase={disableOrder}
            click={this.handleOrder}
            order={this.orderHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          show={this.cancelhandler}
          cancel={this.cancelBtn}
          checkout={this.checkoutBtn}
          alert={this.handleCheckout}
          totalPrice={this.state.totalPrice}
        />
      );
      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }

    return (
      <React.Fragment>
        <Model className="Modal" show={this.state.order}>
          {orderSummary}
        </Model>
        <BackDrop show={this.state.order} />
        {burger}
      </React.Fragment>
    );
  }
}

export default errorHandler(BurgerBuilder, axios);
