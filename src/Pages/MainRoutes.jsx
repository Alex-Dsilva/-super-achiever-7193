import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

import React from "react";
import MainProducts from "./Product/MainProducts";

const MainRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product" element={<MainProducts />} />
          </Routes>
     );
};

export default MainRoutes;
