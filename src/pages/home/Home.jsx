import React from "react";
import { Showcase, List_cocktails } from "../../components";
import { useGlobalContext } from "../../context";
import "./home.css";
export default function Home() {
  const { searchValue } = useGlobalContext();

  if (searchValue !== "") {
    return (
      <div className="Cocktail__home">
        <List_cocktails />
      </div>
    );
  } else {
    return (
      <div className="Cocktail__home">
        <Showcase />
      </div>
    );
  }
}
