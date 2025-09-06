import React, { useContext } from "react";
import { recipecontext } from "../recipecontext/RecipeContext";
import Rdata from "../components/Rdata";
import "./Recipes.css";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  console.log(data);
  const renderedRecipes = data?.map((recipe) => {
    return <Rdata recipe={recipe} key={recipe.id} />;
  });
  return <div className="recipes">{renderedRecipes}</div>;
};

export default Recipes;
