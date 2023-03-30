import axios from "axios";
import React, { useEffect } from "react";

export default function RecipeList() {
  async function fetchRecipes() {
    try{
      let response = await axios.get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&ignorePantry=true&ranking=1`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_API_KEY,
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        }
      );
      console.log(response.data)
    }catch(error){
      console.log("Error in fetching recipes: ", error)
    }
  }
  // useEffect(()=>{
  //   fetchRecipes()
  // },[])
  return <div>RecipeList</div>;
}
