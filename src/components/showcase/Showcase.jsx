import React from "react";
import "./showcase.css";

export default function Showcase() {
  return (
    <div className="showcase__container section__padding">
      <div className="showcase__container-header">
        <div className="showcase__container-header-title">
          <h1 className="gradient-text">Cocktail Club</h1>
          <p>The worlds best cocktail resource</p>
        </div>
        <div className="showcase-input">
          <input type="text" />
        </div>
      </div>
      <div className="showcase-image"></div>
    </div>
  );
}
