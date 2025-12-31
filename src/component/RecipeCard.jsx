import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const{id,image,title,desc,chef}=props.recipe;
  return (
    <Link>
    <img src={image} alt="" />
    <h1>{title}</h1>
    <small>{chef}</small>
    <p>{desc.slice(0,100)}...{" "}<small className='text-blue-400'>more</small></p>
    </Link>
  )
}

export default RecipeCard