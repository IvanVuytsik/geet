import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Explore from "../pages/Explore"
import Create from "../pages/Create"
import Contact from "../pages/Contact"
import GeetDetails from "../pages/GeetDetails"

import About from "../pages/About"
import Terms from "../pages/Terms"
import Help from "../pages/Help"

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/create' element={<Create />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/help' element={<Help />} />
        <Route path='/create/:id' element={<GeetDetails />} />
    </Routes>
  )
}

export default Routers