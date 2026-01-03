import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const SingleRecipes = () => {
     const { data, setdata } = useContext(recipecontext);
    const params = useParams();
    const navigate = useNavigate()
   
    const recipe = data.find((recipe) => params.id == recipe.id)
   

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: recipe?.title,
            chef:recipe?.chef,
            image:recipe?.image,
            inst:recipe?.inst,
            desc:recipe?.desc,
            ingr:recipe?.ingr
        },
    });






    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id);
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setdata(copydata);
        localStorage.setItem("recipes",JSON.stringify(copydata));
        toast.success("Recipe updated!")
    }

    const DeleteHandler = () => {
        const filterdata = data.filter((recipe) => recipe.id != params.id);
        setdata(filterdata);
           localStorage.setItem("recipes",JSON.stringify(filterdata));
        toast.success("Recipe deleted")
        navigate("/recipes")
    }

    useEffect(()=>{
      console.log("SingleRecipes.jsx Mounted");
      return ()=>{
        console.log("SingleRecipes.jsx Unmounted");
      }
      
    },[])

    return (
        recipe ? <div className='w-full flex'>
            <div className='left w-1/2 p-2'>
                <h1 className='text-4xl font-black'>{recipe.title}</h1>
                {/* <img className='h-[40vh]' src={recipe.image || null} alt={recipe.title} /> */}
                {recipe.image ? ( <img src={recipe.image} alt={recipe.title} /> ) : null}
                <h1>{recipe.chef}</h1>
                <p>{recipe.desc}</p>
            </div>

            <form className='w-1/2 p-2' onSubmit={handleSubmit(UpdateHandler)}>

                <input className='border-b outline-0 p-2 block'
                    {...register("image")} type="url" placeholder='Image url' />
                <small className='text-red-400'>Error</small>

                <input className='border-b outline-0 p-2 block'
                    {...register("title")} type="text" placeholder='Recipe title' />

                <input className='border-b outline-0 p-2 block' 
                    {...register("chef")} type="text" placeholder='Chef name' />


                <textarea className='border-b outline-0 p-2 block'
                    {...register("desc")} placeholder='Enter Description' >
                </textarea>


                <textarea className='border-b outline-0 p-2 block'
                    {...register("ingridents")} placeholder='Enter Ingridents' >
                </textarea>


                <textarea className='border-b outline-0 p-2 block'
                    {...register("instructions")} placeholder='Write Instructions' >
                </textarea>

                <select className='border-b outline-0 p-2 block' {...register("category")}  >
                    <option value="braekfast">Braekfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>


                <button className='mt-5 block bg-gray-900 px-4 py-2 rounded cursor-pointer' >Update Recipes</button>
                <button onClick={DeleteHandler} className='mt-5 block bg-red-600 px-4 py-2 rounded cursor-pointer' >Delete Recipes</button>
            </form>



            <img src="" alt="" />
        </div> : "Loading..."
    )
}

export default SingleRecipes;