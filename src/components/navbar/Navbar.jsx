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
        <a href="#about">About</a>
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
    <nav className="Cocktail__navbar nav-bg">
      <div className="Cocktail__navbar-logo">
        <p className="logo-text">Cocktails</p>
        <FaCocktail className="logo " />
      </div>

      <div className="Cocktail__navbar-links">
        <div className="Cocktail__navbar-links-container">
          <Menu />
        </div>
        <div className="Cocktail__navbar-sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>
        <div className="Cocktail__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color={"var(--color-primary)"}
              size={40}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <RiMenu3Line
              color={"var(--color-primary)"}
              size={40}
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
