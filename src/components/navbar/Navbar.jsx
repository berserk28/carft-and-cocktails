import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="Cocktail__navbar">
      <div className="Cocktail__navbar-logo">Cocktail</div>
      <div className="Cocktail__navbar-title">
        <span className="gradient-text">Cocktail</span> Club
      </div>
      <div className="Cocktail__navbar-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
    </nav>
  );
}
