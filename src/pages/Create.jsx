import { nanoid } from 'nanoid';
import React from 'react'
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext';

const Create = () => {
const {data,setdata} =useContext(recipecontext)
   const {register,handleSubmit,reset}=useForm();

   const SubmitHandler=(recipe)=>{
    recipe.id=nanoid();

    //  const copydata=[...data]
    //  copydata.push(recipe)
    //  setdata(copydata)

    setdata([...data,recipe])
     reset();
     
   }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
         <input className='border-b outline-0 p-2 block'
         {...register("image")} type="url" placeholder='Image url'/>
        <small className='text-red-400'>Error</small>

        <input className='border-b outline-0 p-2 block'
         {...register("title")} type="text" placeholder='Recipe title' />

         <input className='border-b outline-0 p-2 block'
         {...register("chef")} type="text" placeholder='Chef name' />
       

         <textarea className='border-b outline-0 p-2 block'
         {...register("desc")}  placeholder='Enter Description' >
        </textarea>
        

         <textarea className='border-b outline-0 p-2 block'
         {...register("ingridents")}  placeholder='Enter Ingridents' >
        </textarea>
   

          <textarea className='border-b outline-0 p-2 block'
         {...register("instructions")}  placeholder='Write Instructions' >
        </textarea>

         <select className='border-b outline-0 p-2 block' {...register("category")}   >
            <option value="braekfast">Braekfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
      

        <button className='mt-5 block bg-gray-900 px-4 py-2 rounded'>Save Recipes</button>
    </form>
  )
}

export default Create