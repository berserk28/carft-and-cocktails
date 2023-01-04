import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./singleCoktail.css";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCoktail = () => {
  const [cocktail, setcocktail] = useState([]);
  const [ingredientString, setIngredientString] = useState("");
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
        const ingredients = [];
        let text = "";
        for (let i = 1; i < 15; i++) {
          if (drinks[0][`strIngredient${i}`]) {
            ingredients[i] = `${drinks[0][`strIngredient${i}`]} - ${
              drinks[0][`strMeasure${i}`]
            }`;
            if (ingredients[i]) {
              text += `${ingredients[i]} `;
            }
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
        };
        setIngredientString(text);
        setcocktail(Newcocktail);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCoctail();
  }, [id]);

  const { title, Category, image, info, glass, Instructons } = cocktail;
  return (
    <section className="SingleCoctail__container section__padding">
      <Link to={"/"} className="SingleCoctail__container-btn">
        Back to Home
      </Link>
      <h1 className="SingleCoctail__container-title">{title}</h1>
      <div className="SingleCoctail__container-cocktail-details">
        <img src={image} alt={title} className="SingleCoctail__container-img" />
        <div className="SingleCoctail__container-cocktail-details-info">
          <p>
            <span className="info-title"> Name :</span>
            {title}
          </p>
          <p>
            <span className="info-title"> Category :</span>
            {Category}
          </p>
          <p>
            <span className="info-title"> Info :</span>
            {info}
          </p>
          <p>
            <span className="info-title"> Glass :</span>
            {glass}
          </p>
          <p>
            <span className="info-title"> Instructons :</span>
            {Instructons}
          </p>
          <p>
            <span className="info-title"> Ingredients :</span>
            {ingredientString} .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCoktail;
<span className="indo-title"></span>;
