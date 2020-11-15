import React, { Component } from "react";
import Button from "../../UI/Model/Button";
import axios from "../../../axios-orders";
import Spinner from "../../UI/spinner/Spinner";
import Input from "../forms/input/Input";
import classes from "../forms/input/Input.css";
import { element } from "prop-types";

class Form extends Component {
  state = {
    isFormValid: false,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      contact: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Contact",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
    ingredients: this.props.ingredients,
    price: this.props.totalPrice,
    loading: false,
  };

  handleValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    console.log(isValid);
    return isValid;
  };

  handleForm = (e) => {
    e.preventDefault();
    console.log("clicked");
    this.setState({ loading: true });
    // alert("Continue Checkout?");
    const formData = {};
    for (let data in this.state.orderForm) {
      formData[data] = this.state.orderForm[data].value;
    }
    const data = {
      personalData: { ...formData },
      ingredients: this.state.ingredients,
      price: this.state.price,
    };
    console.log(formData);
    setTimeout(() => {
      axios
        .post("/orders.json", data)
        .then((response) => {
          this.setState({ loading: false });
          this.props.history.push("/");
        })
        .catch(this.setState({ loading: false }));
    }, 300);
  };
  changedHandler = (e, inputId) => {
    const newForm = { ...this.state.orderForm };
    const newFormConfig = { ...this.state.orderForm[inputId] };
    newFormConfig.value = e.target.value;
    newFormConfig.valid = this.handleValidation(
      newFormConfig.value,
      newFormConfig.validation
    );
    newForm[inputId] = newFormConfig;
    let isValid = true;
    for (let inputId in newForm) {
      isValid = newForm[inputId].valid && isValid;
    }
    this.setState({ orderForm: newForm, isFormValid: isValid });
    console.log(this.state.orderForm);
  };

  render() {
    const arrayOfForms = [];
    for (let key in this.state.orderForm) {
      arrayOfForms.push({ id: key, config: this.state.orderForm[key] });
    }
    console.log(arrayOfForms);
    const inputArray = arrayOfForms.map((input) => {
      return (
        <Input
          inputmodel={input.config.elementType}
          placeholder={input.config.elementConfig.placeholder}
          type={input.config.elementConfig.type}
          value={input.value}
          changed={(e) => this.changedHandler(e, input.id)}
        />
      );
    });
    let form = (
      <form onSubmit={this.orderHandler}>
        {inputArray}
        <button onClick={this.handleForm} disabled={!this.state.isFormValid}>
          Order
        </button>
      </form>
    );
    if (this.state.loading === true) {
      form = <Spinner />;
    }
    return (
      <div className="form">
        <h2>Input Yout Contact Details</h2>
        {form}
      </div>
    );
  }
}

export default Form;
