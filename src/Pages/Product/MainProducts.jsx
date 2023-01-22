import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProdtctFilter from "./ProductFilter";
import "./MainProducts.css";
import { getProduct } from "../../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
const MainProducts = () => {
     const location = useLocation();
     const dispatch = useDispatch();
     const { product } = useSelector((state) => state.Appreducer);
     const [searchParams] = useSearchParams();
     let [loder, setloader] = useState(false);

   

     useEffect(() => {
          if (location || product.length === 0) {
               const getProductParams = {
                    params: {
                         productBrand: searchParams.getAll("productBrand"),
                    },
               };
               dispatch(getProduct(getProductParams));
          }
     }, [location.search, product.length, dispatch]);

     return (
          <div>
               <Box backgroundColor={"#ECECEC"} width={"100%"}>
                    {loder ? (
                         <Text>Loading...</Text>
                    ) : (
                         <Box
                              width="80%"
                              display="flex"
                              backgroundColor={"#ECECEC"}
                              gap={"3%"}
                              margin={"auto"}
                         >
                              <Box
                                   id="filter"
                                   style={{
                                        borderRadius: "10px",
                                        padding: "8px",
                                        width: "20%",
                                   }}
                              >
                                   <ProdtctFilter />
                              </Box>

                              <Box
                                   display="grid"
                                   gridTemplateColumns="repeat(auto-fill,minmax(200px,1fr))"
                                   gap="10px"
                                   w={"80%"}
                                   id="main_product"
                              >
                                   {product?.length > 0 &&
                                        product?.map((ele, i) => {
                                             return (
                                                  <ProductCard
                                                       key={i}
                                                       data={ele}
                                                  />
                                             );
                                        })}
                              </Box>
                         </Box>
                    )}
               </Box>
          </div>
     );
};

export default MainProducts;
