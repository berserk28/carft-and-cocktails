import React from "react";
import { Showcase } from "../../components";
import { useGlobalContext } from "../../context";

import "./home.css";
export default function Home() {
  const { searchTerm, setSearchTerm, isLoading } = useGlobalContext();
  console.log(searchTerm);
  if (searchTerm) {
    return <div className="Cocktail__home"></div>;
  } else {
    return (
      <div className="Cocktail__home">
        <Showcase />
      </div>
    );
  }
}
