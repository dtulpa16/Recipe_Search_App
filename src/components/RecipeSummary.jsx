import React, { useEffect } from "react";
import axios from "axios";
export default function RecipeSummary() {
  async function fetchDescription() {
    try{
        let response = await axios.get(
          `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/4632/summary`,
          {
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_RECIPE_API_KEY,
              "X-RapidAPI-Host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            },
          }
        );
        debugger
        console.log(response.data)
    }catch(error){
        console.log("Error fetching recipe summary: ", error)
    }
  }
  useEffect(()=>{
    fetchDescription()
  },[])
  return <div>RecipeSummary</div>;
}
