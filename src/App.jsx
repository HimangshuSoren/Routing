import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Pages/Home'
import Download from './Pages/Download'
import NotFound from './Pages/NotFound'


const App = () => {
  const [blur,setBlur] = useState(false)
  return (
    <>
    {
      blur?
      <div className={` md:hidden absolute w-screen h-screen backdrop-blur-sm transition-transform duration-100 ease-in-out ${blur?" scale-100 opacity-100":"scale-0 opacity-0"
      }`} ></div>
      :null
    }
      <Routes>
        <Route element={<Navbar setBlur={setBlur} blur={blur} />}>
        <Route element={<Home />} path='/' / >
        <Route element={<Download />} path='/download' / >
        <Route element={<NotFound/>} path='/*' />
        </Route>
      </Routes>

    </>
  )
}

export default App
