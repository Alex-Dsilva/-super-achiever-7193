import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home"


import React from 'react'

const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default MainRoutes
