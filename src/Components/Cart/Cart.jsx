import React, { useContext } from "react";
import stylesheet from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const cartItems = (
    <ul className={stylesheet["cart-items"]}>
      <ul className={stylesheet["cart-items"]}>
        {cartcntx.items.map((item) => (
          <li>
            Name:{item.name} Price:{item.price} Quantity:{item.quantity}
          </li>
        ))}
      </ul>
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={stylesheet.total}>
        <span>Total Amount</span>
        <span>₹ 35.62</span>
      </div>
      <div className={stylesheet.actions}>
        <button
          className={stylesheet["button--alt"]}
          onClick={props.onHideCart}
        >
          Close
        </button>
        <button className={stylesheet.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
