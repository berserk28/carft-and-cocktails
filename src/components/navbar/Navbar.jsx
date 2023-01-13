import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaCocktail } from "react-icons/fa";
import "./navbar.css";
import { useGlobalContext } from "../../context";
import { useRef } from "react";

const Menu = () => {
  return (
    <>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/About">About</Link>
      </p>
      <p>
        <Link to="/Contact">Contact</Link>
      </p>
    </>
  );
};

export default function Navbar() {
  const { toggleMenu, setToggleMenu } = useGlobalContext();

  return (
    <nav className="Cocktail__navbar nav-bg">
      <div className="Cocktail__navbar-logo">
        <p className="logo-text">
          <Link to="/">Cocktails</Link>
        </p>
        <FaCocktail className="logo " />
      </div>

      <div className="Cocktail__navbar-links ">
        <div className="Cocktail__navbar-links-container">
          <Menu />
        </div>
        <div className="Cocktail__navbar-sign">
          <p>
            <Link to={"/Sign_in"}>Sign In</Link>
          </p>
          <button>
            <Link to={"/Contact"}>Sign Up</Link>
          </button>
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
