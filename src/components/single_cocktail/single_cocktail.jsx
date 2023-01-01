import React from "react";
import "./single_cocktail.css";
const Single_cocktail = ({ strDrinkThumb, strDrink }) => {
  return (
    <div className="single_cocktail-container">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="single_cocktail-container-info">
        <h3>{strDrink}</h3>
      </div>
    </div>
  );
};

export default Single_cocktail;
