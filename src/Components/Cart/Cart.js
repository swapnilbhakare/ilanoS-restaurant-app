import React from "react";
import stylesheet from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={stylesheet["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={stylesheet.total}>
        <span>Total Amount</span>
        <span>₹ 35.62</span>
      </div>
      <div className={stylesheet.actions}>
        <button className={stylesheet["button--alt"]}>Close</button>
        <button className={stylesheet.button}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
