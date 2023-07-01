import React, { useState } from "react";
import CartIcon from "../Cart/CartIcon.js";
import stylesheet from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  return (
    <>
      <button className={stylesheet.button} onClick={props.onClick}>
        <span className={stylesheet.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={stylesheet.badge}>0</span>
      </button>
    </>
  );
};

export default HeaderButton;
