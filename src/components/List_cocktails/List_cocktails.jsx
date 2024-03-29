import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";
import { useGlobalContext } from "../../context";
import Cocktail from "../cocktail/cocktail";
import Error from "../../pages/error/error";

function List_cocktails() {
  const { isloading, cocktails, error } = useGlobalContext();

  if (isloading)
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
          <Spinner />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <h1>error</h1>
      </div>
    );
  if (!cocktails) {
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <Error />
      </div>
    );
  } else {
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <div className=" List_cocktails-grid">
          {cocktails.map((item) => {
            return (
              <h1>
                <Cocktail key={item.idDrink} {...item} />
              </h1>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List_cocktails;
