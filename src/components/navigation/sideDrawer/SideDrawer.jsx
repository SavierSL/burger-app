import React from "react";
import Logo from "../../logo/Logo";
import NavBtn from "../../navButton/NavBtn";
import classes from "../sideDrawer/SideDrawer.css";
import Model from "../../UI/Model/Model";
import Backdrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavBtn />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
