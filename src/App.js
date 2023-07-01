import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CardProvider from "./store/CardProvider.jsx";
function App() {
  const [openCart, setOpenCart] = useState(false);
  const openCartHandler = () => {
    setOpenCart(true);
  };
  const hideCardHandler = () => {
    setOpenCart(false);
  };

  return (
    <CardProvider>
      {openCart && <Cart onHideCart={hideCardHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
