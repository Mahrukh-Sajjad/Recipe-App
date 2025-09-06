import React, { createContext, useState, useEffect } from "react";
export const recipecontext = createContext(null);
const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      title: "Fluffy Pancakes",
      descriptions:
        "Delicious and fluffy pancakes perfect for a hearty breakfast.",
      ingredients:
        "1 1/2 cups all-purpose flour, 3 1/2 teaspoons baking powder, 1 teaspoon salt, 1 tablespoon white sugar, 1 1/4 cups milk, 1 egg, 3 tablespoons butter (melted)",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructions:
        "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot with syrup or toppings of choice.",
      category: "Breakfast",
    },
  ]);
  useEffect(() => {
    // setdata(JSON.parse(localStorage.getItem("recipes")));
    const saved = JSON.parse(localStorage.getItem("recipes"));
    setdata(saved || []); // ✅ safe fallback
  }, []);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
