import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

const Recipes = () => {
  const{data}=useContext(recipecontext);

  const renderrecipes=data.map((recipe)=>{
   return(<RecipeCard key={recipe.id} recipe={recipe} />) 

  })
  
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ?renderrecipes : "No recipes found!"}
    </div>
  )
}

export default Recipes
