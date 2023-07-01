import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const openCartHandler = () => {
    setOpenCart(true);
  };
  const hideCardHandler = () => {
    setOpenCart(false);
  };

  return (
    <>
      {openCart && <Cart onHideCart={hideCardHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
