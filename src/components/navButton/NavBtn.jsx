import React from "react";
import classes from "../navButton/NavBtn.css";
import { Link } from "react-router-dom";

const builder = () => {
  return (
    <div>
      <div className="Navbutton">
        <ul className="navList">
          <li className="navLists">
            <Link to="/" className="checkout">
              <h4>Burger Buidler</h4>
            </Link>
          </li>
          <li className="navLists">
            <Link to="/orders" className="checkout">
              <h4>Orders</h4>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default builder;
