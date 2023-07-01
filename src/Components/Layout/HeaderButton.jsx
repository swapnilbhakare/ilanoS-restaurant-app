import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon.js";
import stylesheet from "./HeaderButton.module.css";
import CardContext from "../../store/cart-context.js";
const HeaderButton = (props) => {
  const cartCtx = useContext(CardContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <button className={stylesheet.button} onClick={props.onClick}>
        <span className={stylesheet.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={stylesheet.badge}>{quantity}</span>
      </button>
    </>
  );
};

export default HeaderButton;
