import React, { useContext } from "react";
import "./Create.css";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../recipecontext/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  console.log(data);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submitHandler = (recipe) => {
    // console.log(recipe);
    recipe.id = nanoid();
    const copyData = [...data];
    copyData.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    setdata(copyData);
    reset();
    toast.success("Recipe saved successfully");
    navigate("/recipes");
  };
  return (
    <div className="create-main">
      <div className="input-form">
        <img
          src="https://plus.unsplash.com/premium_photo-1694707656609-d51ff463baed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <form onSubmit={handleSubmit(submitHandler)}>
          <h1>Enter Recipe Details</h1>
          <input
            type="url"
            {...register("image")}
            placeholder="Enter url of image"
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe title"
          />

          <textarea
            {...register("descriptions")}
            placeholder="//Enter Description"
          ></textarea>

          <textarea
            {...register("ingredients")}
            placeholder="Write ingredients"
          ></textarea>

          <textarea
            {...register("instructions")}
            placeholder="Write insructions"
          ></textarea>
          <select {...register("category")}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="Dinner">Dinner</option>
          </select>
          <button>Save Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
