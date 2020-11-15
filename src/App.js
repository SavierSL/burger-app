import React, { Component } from "react";
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./components/burgerBuilder/BurgerBuilder";
import Checkout from "../src/components/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "../src/components/container/checkoutSummary/orders/Orders";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
