import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import RecipeContext from './context/RecipeContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <RecipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeContext>
)
