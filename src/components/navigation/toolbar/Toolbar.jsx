import React from "react";
import classes from "../toolbar/Toolbar.css";
import Logo from "../../logo/Logo";
import NavBtn from "../../navButton/NavBtn";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div className="DrawerToggle" onClick={props.openDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Logo height="70%" />
      <div className="DesktopOnly"></div>
      <nav className="DesktopOnly">
        <NavBtn />
      </nav>
    </header>
  );
};

export default toolbar;
