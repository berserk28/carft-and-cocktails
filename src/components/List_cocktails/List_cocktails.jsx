import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";

import { useGlobalContext } from "../../context";
import error from "../../pages/error/error";

function Cocktails() {
  const { searchValue, setCokctails, cocktails, isLoading, error } =
    useGlobalContext();

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

        <h1>data</h1>
      </div>
    );
  }
}

export default Cocktails;
