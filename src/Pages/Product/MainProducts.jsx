import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProdtctFilter from "./ProductFilter";
import "./MainProducts.css";
import dbData from "../../myData.json";
const MainProducts = () => {
     const [data, setData] = useState(dbData);
     let [loder, setloader] = useState(false);

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
                                   {data?.map((ele, i) => {
                                        return (
                                             <ProductCard key={i} data={ele} />
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
