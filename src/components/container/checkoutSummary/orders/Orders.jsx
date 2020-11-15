import React, { Component } from "react";
import axios from "../../../../axios-orders";
import Order from "../orders/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios.get("/orders.json").then((res) => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }

      this.setState({
        orders: fetchedOrders,
        loading: false,
      });
      console.log(fetchedOrders);
    });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default Orders;
