import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RecipeContext from "./recipecontext/RecipeContext";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  </RecipeContext>
);
