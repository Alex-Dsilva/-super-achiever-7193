import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import Cart from "./Cart/Cart"
import ProductCard from "../Components/ProductCard";


import React from 'react'

const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Cart" element={<Cart/>} />
     <Route part="/product" element={<ProductCard/>}/>
    </Routes>
  )
}

export default MainRoutes
