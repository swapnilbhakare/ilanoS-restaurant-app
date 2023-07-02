import React, { useContext } from "react";
import stylesheet from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const isCarthaveItems = cartcntx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartcntx.addItem({ ...item, quantity: 1 });
  };

  const cartItemRemoveHandler = (item) => {
    cartcntx.removeItem(item);
  };

  const cartItems = (
    <ul className={stylesheet["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  //
  let amount = 0;
  cartcntx.items.forEach((item) => {
    amount = amount + Number(item.price * item.quantity);
  });
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={stylesheet.total}>
        <span>Total Amount</span>
        <span>₹ {amount.toFixed(2)}</span>
      </div>
      <div className={stylesheet.actions}>
        <button
          className={stylesheet["button--alt"]}
          onClick={props.onHideCart}
        >
          Close
        </button>
        {isCarthaveItems && (
          <button className={stylesheet.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
