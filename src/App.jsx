import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-800 text-white py-10 px-[10%]'>
      <Navbar/>
      <Mainroutes/>  
    </div>
  )
}

export default App