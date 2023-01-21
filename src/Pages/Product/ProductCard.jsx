import React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import Productwishlist from "./Productwishlist";
// import { Link } from "react-router-dom";
import "./ProductCard.css";
import discounttag from "./discounttag.png";
import newPic from "./originalnew.png";
import offerPic from "./4545.png";
const ProductCard = ({ data }) => {
     const {
          brandname,
          productname,
          images,
          isOffer,
          discountPercent,
          price,
          mrpPrice,
          newProduct,
          rating,
          ratingCount,

          productTitle,

          productNudgeMessage,
     } = data;
     // console.log("images", images);
     return (
          <div>
               <Box width="220px" height="auto" m={4}>
                    {/* <Link to={`/products/${data.id}`}> */}
                    {/* IMAGE DIV START */}
                    <Box position={"relative"} className="imagecard">
                         <Image
                              style={{ borderRadius: "10px" }}
                              width="100%"
                              src={images[0].url}
                              alt="imageURL"
                         />
                         <Box>
                              <Image
                                   position={"absolute"}
                                   top="5%"
                                   width={"32%"}
                                   left="-1%"
                                   src={
                                        !newProduct && !isOffer
                                             ? discounttag
                                             : newProduct
                                             ? newPic
                                             : isOffer
                                             ? offerPic
                                             : newProduct
                                   }
                              />
                              <Text
                                   fontSize={"12px"}
                                   fontWeight="bold"
                                   color="#fff"
                                   position={"absolute"}
                                   top="7%"
                                   width={"32%"}
                                   left="-1%"
                                   textAlign="center"
                                   display={
                                        !newProduct && !isOffer
                                             ? null
                                             : newProduct
                                             ? "none"
                                             : isOffer
                                             ? "none"
                                             : null
                                   }
                              >
                                   {discountPercent}% off
                              </Text>
                         </Box>
                    </Box>
                    {/* </Link> */}
                    {/* IMAGE DIV END */}

                    {/* PRODUCT BRAND START */}
                    <Box
                         display="flex"
                         margin={"5px 2px"}
                         justifyContent="space-between"
                    >
                         <Text
                              color={"#212121"}
                              fontWeight="500"
                              fontSize={"16px"}
                         >
                              {brandname || productTitle}
                         </Text>
                         <Box>
                              {/* <AiFillHeart
              style={{ color: "rgb(255,15,88)", fontSize: "22px" }}
            /> */}

                              <AiOutlineHeart
                                   style={{ color: "gray", fontSize: "22px" }}
                              />
                         </Box>
                    </Box>

                    {/* PRODUCT NAME START */}
                    <Box
                         textAlign="left"
                         margin={"5px 2px"}
                         fontWeight="300"
                         padding="5px auto"
                         color="#4a4a4a"
                         lineHeight="125%"
                         marginBottom={"8px"}
                         fontSize="14px"
                    >
                         {productname}
                    </Box>
                    {/* PRODUCT NAME END */}

                    {/* PRICE AND DISCOUNT START */}
                    <Box
                         display="flex"
                         margin={"5px 2px"}
                         justifycontent="left"
                    >
                         <Text
                              fontWeight="500"
                              fontSize={"14px"}
                              mr={2}
                              color="#212121"
                              lineHeight="100%"
                         >
                              ₹{price}
                         </Text>
                         <Text
                              textDecoration="line-through"
                              color="#979797"
                              fontSize="12px"
                         >
                              ₹{mrpPrice}
                         </Text>
                    </Box>
                    {/* PRICE AND DISCOUNT END */}

                    {/* RATING AND DISCOUNT START */}
                    <Box
                         display="flex"
                         margin={"5px 2px"}
                         justifycontent="left"
                    >
                         <Box
                              display="flex"
                              justifycontent="left"
                              fontSize="12px"
                              color="#212121"
                              padding="3px 6px"
                              borderRadius="100px"
                              backgroundColor="#eef8e7"
                              lineHeight="1"
                              fontStyle="normal"
                         >
                              {rating}
                              <StarIcon
                                   color="rgb(73,155,31)"
                                   width="8px"
                                   ml={2}
                                   mr={3}
                              />
                         </Box>
                         <Text
                              color={"#979797"}
                              fontSize={"12px"}
                              fontWeight={400}
                         >
                              ({ratingCount})
                         </Text>
                    </Box>
                    {/* RATING AND DISCOUNT END*/}
                    {/* Stock status start */}
                    <Box
                         display="flex"
                         margin={"5px 2px"}
                         justifycontent="left"
                    >
                         <Text
                              color={"#FE0C58"}
                              fontSize={"14px"}
                              fontWeight={500}
                         >
                              {productNudgeMessage}
                         </Text>
                    </Box>
                    {/* Stock status end */}
               </Box>
          </div>
     );
};

export default ProductCard;
