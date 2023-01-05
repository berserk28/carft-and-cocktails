import React from "react";
import { useGlobalContext } from "../../context";
import "./showcase.css";
import image from "../../images/glass.png";
import Search_bar from "../search_bar/search-bar";
export default function Showcase() {
  const { setSearchValue, searchValue, setSearchTerm } = useGlobalContext();

  return (
    <div className="showcase__container section__padding ">
      <div className="showcase__container-header">
        <div className="showcase__container-header-title">
          <h1 className="gradient__text">Cocktail Club</h1>
          <p>The worlds best cocktail resource</p>
        </div>
        <Search_bar />
      </div>
      <div className="showcase-image">
        <img src={image} alt="showcases" />
      </div>
    </div>
  );
}
