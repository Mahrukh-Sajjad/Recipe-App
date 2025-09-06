import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Layout from "../components/Layout";
import Recipes from "../pages/Recipes";
import SingleRecipe from "../pages/SingleRecipe";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Mainroutes;
