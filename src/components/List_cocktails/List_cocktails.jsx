import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";
import { useGlobalContext } from "../../context";
function Cocktails() {
  const { isLoading } = useGlobalContext();
  if (isLoading)
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
        <Spinner />
      </div>
    );
  else {
    return (
      <div className="section__padding List_cocktails">
        <div className="search-bar-container">
          <Search_bar className="List_cocktails" />
        </div>
      </div>
    );
  }
}

export default Cocktails;
