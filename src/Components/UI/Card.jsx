import React from "react";
import stylesheet from "./Card.module.css";
const Card = (props) => {
  return <div className={stylesheet.card}>{props.children}</div>;
};

export default Card;
