import React from "react";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <h1 className="header-title">CCC 276 Sandhamn Private</h1>
          <p className="header-subtitle">Carleton Condominium Coproration No 276</p>
        </div>
      </header>
      <HeaderMenu /> 
    </>
  );
};

export default Header;
