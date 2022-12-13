import React from "react";
import { useGlobalContext } from "../../context";
import "./showcase.css";
import image from "../../images/glass.png";
export default function Showcase() {
  const { setSearchValue, searchValue } = useGlobalContext();
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(searchValue);
  return (
    <div className="showcase__container section__padding ">
      <div className="showcase__container-header">
        <div className="showcase__container-header-title">
          <h1 className="gradient__text">Cocktail Club</h1>
          <p>The worlds best cocktail resource</p>
        </div>
        <div className="showcase__container-header-input">
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            placeholder="Your Cocktail name"
          />
          <button
            type="button"
            onClick={() => {
              console.log("hii");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="showcase-image">
        <img src={image} alt="showcase" />
      </div>
    </div>
  );
}
