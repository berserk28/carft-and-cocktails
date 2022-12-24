import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";
import { useContext, useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../../context";
import error from "../../pages/error/error";
import { useQuery } from "react-query";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
function Cocktails() {
  const { searchValue } = useGlobalContext();
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    fetch(`${url}${searchValue}`).then((res) => res.json())
  );

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
    const { drinks } = data;
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <button onClick={refetch}>refetch</button>
        {drinks.map((item) => {
          return <h1>{item.strDrink}</h1>;
        })}
      </div>
    );
  }
}

export default Cocktails;
