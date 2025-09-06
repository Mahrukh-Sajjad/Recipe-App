import React from "react";
import "./Rdata.css";
import { Link } from "react-router-dom";

const Rdata = (props) => {
  const { id, image, title } = props.recipe;
  return (
    <div className="card">
      <img src={image} alt="" />
      
      <Link to={`/recipes/details/${id}`} className="link">
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Rdata;
