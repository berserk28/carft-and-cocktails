import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";
import { useQuery } from "react-query";
import { useGlobalContext } from "../../context";

function Cocktails() {
  const { searchValue, setCokctails, cocktails } = useGlobalContext();
  const { isLoading, error, data, refetch } = useQuery("cocktail", () =>
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`
    ).then((res) => res.json())
  );

  setCokctails(data.drinks);
  if (isLoading)
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <Spinner />
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
  else {
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <button onClick={refetch}>reflesh</button>
        {cocktails.map((drink) => {
          return <h2>{drink.strDrink}</h2>;
        })}
      </div>
    );
  }
}

export default Cocktails;
