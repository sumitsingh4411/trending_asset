import React from "react";
import { ICONS_LIST } from "../constant";
import Icons from "../icons/Icons";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Icons title={ICONS_LIST.TRENDING} />
      <h3 className="header__title">Trending</h3>
    </header>
  );
}

export default Header;
