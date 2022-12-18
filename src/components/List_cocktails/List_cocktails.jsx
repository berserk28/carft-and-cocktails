import React from "react";
import "./List_cocktails.css";
import { useQuery } from "react-query";
import { Search_bar } from "../index";
import { Spinner } from "../index";

function Cocktails() {
  const { isLoading, error, data } = useQuery("cocktail", () =>
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita/react-query"
    ).then((res) => res.json())
  );
  console.log(error);
  console.log(isLoading, data);
  if (isLoading) return <h1>loading</h1>;

  if (error) return <h1>error</h1>;

  return data;
}

export default Cocktails;

//  if (isLoading)
//    return (
//      <div className="section__padding List_cocktails">
//        <div className="search-bar-container">
//          <Search_bar className="List_cocktails" />
//        </div>
//        <Spinner />
//      </div>
//    );
//  else {
//    return (
//      <div className="section__padding List_cocktails">
//        <div className="search-bar-container">
//          <Search_bar className="List_cocktails" />
//        </div>
//      </div>
//    );
//  }
