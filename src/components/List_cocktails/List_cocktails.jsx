import React from "react";
import "./List_cocktails.css";
import { Search_bar } from "../index";
import { Spinner } from "../index";
import { useContext, useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../../context";
import error from "../../pages/error/error";

function Cocktails() {
  const { searchValue, isloading, cocktails } = useGlobalContext();
  console.log(cocktails);
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
  else {
    <div className="section__padding List_cocktails">
      <div className="search-bar-container">
        <Search_bar className="List_cocktails" />
      </div>
      <h1>data</h1>
    </div>;
  }
}

export default Cocktails;
