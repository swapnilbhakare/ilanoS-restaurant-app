import React from "react";
import meals from "../../Assets/meals.jpg";
import stylesheet from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <>
      <header className={stylesheet.header}>
        <h1>ilanoS</h1>
        <HeaderButton />
      </header>
      <div className={stylesheet["main-image"]}>
        <img src={meals} alt="food" />
      </div>
    </>
  );
};

export default Header;
