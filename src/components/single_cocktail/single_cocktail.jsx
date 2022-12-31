import React from "react";
import "./single_cocktail.css";
const single_cocktail = ({ strAlcoholic, strDrinkThumb, strDrink }) => {
  return (
    <div className="single_cocktail">
      <img src={strDrinkThumb} alt={strDrink} />
    </div>
  );
};

export default single_cocktail;
