import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./singleCoktail.css";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCoktail = () => {
  const [cocktail, setcocktail] = useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchCoctail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const { drinks } = data;

        const {
          strDrink: title,
          strCategory: Category,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: Instructons,
        } = drinks[0];
        console.log(drinks[0]);
        const ingredients = [];
        for (let i = 1; i < 15; i++) {
          if (drinks[0][`strIngredient${i}`]) {
            ingredients[i] = `${drinks[0][`strIngredient${i}`]} - ${
              drinks[0][`strMeasure${i}`]
            }`;
          } else {
            break;
          }
        }

        const Newcocktail = {
          title,
          Category,
          image,
          info,
          glass,
          Instructons,
          ingredients,
        };
        setcocktail(Newcocktail);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoctail();
  }, [id]);
  console.log(cocktail);
  const { title, Category, image, info, glass, Instructons, ingredients } =
    cocktail;
  return (
    <section className="SingleCoctail__container section__padding">
      <Link to={"/"} className="SingleCoctail__container-btn">
        Back to Home
      </Link>
      <h1 className="SingleCoctail__container-title">{title}</h1>
      <div className="SingleCoctail__container-cocktail-details">
        <img src={image} alt={title} className="SingleCoctail__container-img" />
        <div className="SingleCoctail__container-cocktail-details-info">
          <h3>Name : {title}</h3>
          <h3>Category : {Category}</h3>
          <h3>Info :{info}</h3>
          <h3>Glass :{glass}</h3>
          <h3>Instructons :{Instructons}</h3>
        </div>
      </div>
    </section>
  );
};

export default SingleCoktail;
