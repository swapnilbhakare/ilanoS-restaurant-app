import React, { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCardHandler = (item) => {
    updateItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
