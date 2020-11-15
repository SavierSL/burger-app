import React from "react";
import burgerLogo from "../../assets/images/28.1 burger-logo.png";
import classes from "../../components/logo/Logo.css";

const logo = (props) => {
  return (
    <div className="Logo" style={{ height: props.height }}>
      <img className="Logo img" src={burgerLogo} alt="My Burger" />
    </div>
  );
};
export default logo;
