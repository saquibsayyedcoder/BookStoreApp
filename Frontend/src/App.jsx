import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Acontacts from './Acontact/Acontacts'

function App() {
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path='/course' element={<Courses />} />
   <Route path='/signup' element={<Signup />} />
   <Route path='/contact' element={<Acontacts />} />

   </Routes>
  </div>
   </>


  )
}

export default App
