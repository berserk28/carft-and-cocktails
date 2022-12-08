import React from "react";
import "./showcase.css";
import image from "../../images/blue.jpg";
export default function Showcase() {
  return (
    <div className="showcase__container section__padding ">
      <div className="showcase__container-header">
        <div className="showcase__container-header-title">
          <h1 className="gradient__text">Cocktail Club</h1>
          <p>The worlds best cocktail resource</p>
        </div>
        <div className="showcase__container-header-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      </div>
      <div className="showcase-image">
        <img src={image} alt="showcase" />
      </div>
    </div>
  );
}
