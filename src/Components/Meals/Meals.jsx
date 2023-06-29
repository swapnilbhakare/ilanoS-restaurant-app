import React from "react";
import stylesheet from "./Meals.module.css";
import MealSummary from "./MealSummary";
import AvilableMeals from "./AvilableMeals";
const Meals = () => {
  return (
    <>
      <MealSummary />
      <AvilableMeals />
    </>
  );
};

export default Meals;
