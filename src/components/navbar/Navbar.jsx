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
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 bg-gradient">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

{
  /* <nav className="Cocktail__navbar ">
      <div className="Cocktail__navbar-logo">
        <p className="logo-text">Cocktails</p>
        <FaCocktail className="logo" />
      </div>
      <div className="Cocktail__navbar-title">
        <a href="#home">
          <span className="gradient-text">Cocktail</span> Club
        </a>
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
    </nav> */
}
