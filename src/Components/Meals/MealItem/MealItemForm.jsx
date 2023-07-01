import React, { useContext } from "react";
import stylesheet from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    // update the cartContex.item
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <>
      <form>
        <div className={stylesheet.form}>
          <div className={stylesheet.inputContainer}>
            <Input
              label="amount"
              input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                defaultValue: "1",
              }}
            />
          </div>
          <button onClick={addItemToCart}>+ Add</button>
        </div>
      </form>
    </>
  );
};

export default MealItemForm;
