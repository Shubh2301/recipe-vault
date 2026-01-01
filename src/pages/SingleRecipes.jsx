import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'

const SingleRecipes = () => {
    const { data } = useContext(recipecontext);

    const params = useParams();

    const recipe = data.find(recipe => params.id == recipe.id)
    console.log(recipe);

    const {register,handleSubmit,reset}=useForm();

    const SubmitHandler=(recipe)=>{
         
       }


    return (
        recipe ? <div className='w-full flex'>
            <div className='left w-1/2 p-2'>
                <h1 className='text-4xl font-black'>{recipe.title}</h1>
                <img className='h-[40vh]' src={recipe.image} alt="" />
            </div>

            <form className='w-1/2 p-2' onSubmit={handleSubmit(SubmitHandler)}>

                <input className='border-b outline-0 p-2 block' value={recipe.image}
                    {...register("image")} type="url" placeholder='Image url' />
                <small className='text-red-400'>Error</small>

                <input className='border-b outline-0 p-2 block' value={recipe.title}
                    {...register("title")} type="text" placeholder='Recipe title' />

                <input className='border-b outline-0 p-2 block' value={recipe.chef}
                    {...register("chef")} type="text" placeholder='Chef name' />


                <textarea className='border-b outline-0 p-2 block' value={recipe.desc}
                    {...register("desc")} placeholder='Enter Description' >
                </textarea>


                <textarea className='border-b outline-0 p-2 block'
                    {...register("ingridents")} placeholder='Enter Ingridents' >
                </textarea>


                <textarea className='border-b outline-0 p-2 block'
                    {...register("instructions")} placeholder='Write Instructions' >
                </textarea>

                <select className='border-b outline-0 p-2 block' {...register("category")}  value={recipe.category}  >
                    <option value="braekfast">Braekfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>


                <button className='mt-5 block bg-gray-900 px-4 py-2 rounded cursor-pointer' >Update Recipes</button>
                   <button className='mt-5 block bg-red-600 px-4 py-2 rounded cursor-pointer' >Delete Recipes</button>
            </form>



            <img src="" alt="" />
        </div> : "Loading..."
    )
}

export default SingleRecipes;