import React, { useContext } from "react";
import "./SingleRecipe.css";
import { recipecontext } from "../recipecontext/RecipeContext";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
  const { data } = useContext(recipecontext);
  const params = useParams();
  const Recipe = data.find((recipe) => params.id == recipe.id);
  return (
    <div className="main">
      <div className="SRecipe">
        <div className="RecipeForm">
          <div className="RecipeImg">
            <img src={Recipe.image} alt="" />
          </div>
          <div className="details">
            <h1>{Recipe.title}</h1>
            <h3>Description</h3>
            <p>{Recipe.descriptions}</p>
            <h3>Ingredients</h3>
            <p>{Recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{Recipe.instructions}</p>
            <h3>Category</h3>
            <p>{Recipe.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
