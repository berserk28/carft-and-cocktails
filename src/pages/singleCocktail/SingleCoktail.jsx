import React from "react";
import { useParams } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCoktail = () => {
  console.log("hi");
  const { id } = useParams();
  console.log(id);
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      console.log(drinks);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [id]);

  return <section className="SingleCoctail__container section">h1</section>;
};

export default SingleCoktail;
