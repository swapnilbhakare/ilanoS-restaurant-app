import React from "react";
import stylesheet from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;
  return (
    <li className={stylesheet.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={stylesheet.description}>{props.description}</div>
      </div>
      <div className={stylesheet.price}> {price}</div>
    </li>
  );
};

export default MealItem;
