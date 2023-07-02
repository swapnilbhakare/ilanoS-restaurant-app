import React, { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCardHandler = (item) => {
    let cartItems = [...items];
    let hasItem = false;
    cartItems.forEach((product) => {
      if (product.id === item.id) {
        hasItem = true;
        product.quantity = Number(product.quantity) + Number(item.quantity);
      }
    });
    if (hasItem) {
      setItems([...cartItems]);
    } else {
      setItems((prevItems) => {
        return [...prevItems, item];
      });
    }
  };

  const removeItemFromCartHandler = (item) => {
    const cartItems = [...items];
    cartItems.forEach((product, index) => {
      if (product.id === item.id && item.quantity <= 1) {
        cartItems.splice(index, 1);
        setItems(cartItems);
      }
      if (product.id === item.id && item.quantity > 1) {
        product.quantity = Number(product.quantity) - 1;
        setItems(cartItems);
      }
    });
  };

  const cartContext = {
    items: items,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
    totalAmount: 0,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
