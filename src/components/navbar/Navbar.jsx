import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaCocktail } from "react-icons/fa";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#home">About</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="Cocktail__navbar ">
      <div className="Cocktail__navbar-logo">
        <p className="logo-text">Cocktails</p>
        <FaCocktail className="logo" />
      </div>

      <div className="Cocktail__navbar-links">
        <Menu />
        <div className="Cocktail__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color={"var(--color-primary)"}
              size={27}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <RiMenu3Line
              color={"var(--color-primary)"}
              size={27}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {toggleMenu && (
            <div className="Cocktail__navbar-menu-container scale-up-center">
              <div className="Cocktail__navbar-menu-container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
