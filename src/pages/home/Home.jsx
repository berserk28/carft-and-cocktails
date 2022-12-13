import React from "react";
import { Showcase } from "../../components";
import { useGlobalContext } from "../../context";
import "./home.css";
export default function Home() {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  console.log(searchTerm);
  return (
    <div className="Cocktail__home">
      {searchTerm ? <h1>search</h1> : <Showcase />}
    </div>
  );
}
