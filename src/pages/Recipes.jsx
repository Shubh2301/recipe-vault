import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeCard from '../component/RecipeCard';

const Recipes = () => {
  const{data}=useContext(recipecontext);

  const renderrecipes=data.map((recipe)=>{
   return(<RecipeCard key={recipe.id} recipe={recipe} />) 

  })
  
  return (
    <div>{renderrecipes}</div>
  )
}

export default Recipes
