import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/create");
  };
  return (
    <div className="hero">
      <div className="left">
        <h1>Your Kitchen Your Rules</h1>
        <p>
          Manage all your recipes in one place — add new ones, edit ingredients,
          or delete what you no longer need. It’s your digital cookbook, made
          just for you.
        </p>
        <button
          onClick={() => {
            handleNavigate();
          }}
        >
          Create Recipe
        </button>
      </div>
      <div className="right">
        <img
          src="
          https://wallpapercave.com/wp/wp12265779.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
