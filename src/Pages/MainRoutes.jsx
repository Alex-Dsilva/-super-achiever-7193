import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import Cart from "./Cart/Cart"
import React from "react";
import MainProducts from "./Product/MainProducts";
import { ProductDetail } from "./Product/ProductDetail";

const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Cart" element={<Cart/>} />
     <Route path="/product" element={<MainProducts />} />
     <Route path="/singleproduct/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default MainRoutes
