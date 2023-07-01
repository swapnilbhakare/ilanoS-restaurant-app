import React from "react";
import stylesheet from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <>
      <form>
        <div className={stylesheet.formContainer}>
          <div className={stylesheet.inputContainer}>
            <lable htmlFor="quantity">Amount</lable>
            <input
              type="number"
              name="quantity"
              id="quantity"
              defaultValue={1}
            />
          </div>
          <button type="submit">+ Add</button>
        </div>
      </form>
    </>
  );
};

export default MealItemForm;
