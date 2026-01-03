import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipes from '../pages/SingleRecipes'
import PageNotFound from '../pages/PageNotFound'
import Fev from '../pages/Fev'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/detail/:id' element={<SingleRecipes />} />
            <Route path='/about' element={<About />} />
            <Route path='/fev' element={<Fev />} />
            {/* Wildcard route */}
            <Route path='*' element={<PageNotFound />} />
        </Routes    >
    )
}

export default Mainroutes