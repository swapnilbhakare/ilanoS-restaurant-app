import React from "react";
import stylesheet from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <>
      <form>
        <div className={stylesheet.form}>
          <div className={stylesheet.inputContainer}>
            <Input
              label="amount"
              input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "5",
                defaultValue: "1",
              }}
            />
          </div>
          <button type="submit">+ Add</button>
        </div>
      </form>
    </>
  );
};

export default MealItemForm;
