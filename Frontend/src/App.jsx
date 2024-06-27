import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Acontacts from './Acontact/Acontacts'
import { useAuth } from "./Context/AuthProvider"


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path='/course' element={authUser?<Courses />:<Navigate to="/signup"/>}/>
   <Route path='/signup' element={<Signup />} />
   <Route path='/contact' element={<Acontacts />} />

   </Routes>
  
  </div>
   </>


  )
}

export default App
