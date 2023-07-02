import React from "react";
import stylesheet from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li className={stylesheet.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={stylesheet.description}>{props.description}</p>
        <div className={stylesheet.price}> {price}</div>
      </div>

      <MealItemForm id={props.id} item={props} />
    </li>
  );
};

export default MealItem;
