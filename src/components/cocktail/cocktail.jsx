import React from "react";
import "./cocktail.css";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const Cocktail = ({ strDrinkThumb, strDrink, idDrink }) => {
  const { setcoktailId } = useGlobalContext();
  return (
    <div
      onClick={() => {
        setcoktailId(idDrink);
      }}
      className="single_cocktail-container"
    >
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="single_cocktail-container-info">
        <h3>{strDrink}</h3>
        <Link to={`/SingleCocltail/${idDrink}`} className=" btn-detail">
          Details .
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
