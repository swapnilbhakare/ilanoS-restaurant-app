import React from "react";
import stylesheet from "./CartItem.module.css";
const CartItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li className={stylesheet.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={stylesheet.summary}>
          <span className={stylesheet.price}>{price}</span>
          <span className={stylesheet.amount}>X {props.amount}</span>
        </div>
      </div>
      <div className={stylesheet.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
