import React, { useState } from "react";
import {
     Box,
     Heading,
     Image,
     Text,
     Button,
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
} from "@chakra-ui/react";
import "./ProductDetails.css";
// import { useToast } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
// import { useParams } from "react-router-dom";

const obj = {
     isOffer: false,
     newProduct: false,
     ratingCount: 0,
     discountPercent: 80,
     _id: "63c8304f6ed444262bf88bee",
     productname: "Puma Kids Active Black Small Logo Print T-Shirt",
     description:
          "A melange of style and comfort, this black t-shirt from Puma Kids will be an apt inclusion to your little heart's wardrobe. Tailored to sartorial perfection from premium quality fabric, it assures a soft and soothing touch against the skin. The crew neck adds to its appeal. Exuding short sleeves, it is sure to fetch your dear compliments from all. It emanates a brand logo which makes it a unique choice. To complete the look, your dear can flaunt a pair of sunglasses. Equipped with the dryCELL feature, it will let your dear one revel in comfort.",
     price: 699,
     rating: 0,
     images: [
          {
               public_id: "sample Image",
               url: "https://img.tatacliq.com/images/i7/97Wx144H/MP000000009773152_97Wx144H_202106130824251.jpeg",
               _id: "63c8304f6ed444262bf88bef",
          },
          {
               public_id: "image1",
               url: "https://img.tatacliq.com/images/i7/97Wx144H/MP000000009773152_97Wx144H_202106130824262.jpeg",
               _id: "63c8304f6ed444262bf88bf0",
          },
          {
               public_id: "image2",
               url: "https://img.tatacliq.com/images/i7/97Wx144H/MP000000009773152_97Wx144H_202106130824273.jpeg",
               _id: "63c8304f6ed444262bf88bf1",
          },
     ],
     productCategory: "Kid's Fashion",
     stock: 1,
     numberOfReviwes: 0,
     reviews: [],
     createdAt: "2023-01-18T17:45:51.999Z",
     __v: 0,
};

const ProductDetail = () => {
     // const { id } = useParams();
     let [data1, setdata1] = useState([]);
     let [disabled, setDisable] = useState(false);

     const addtowish = async (value) => {};
     // localhost:8080/product/singleProduct/${id}
     const handleAddToCart = async (value) => {};

     return (
          <div>
               <Box backgroundColor={"rgb(236,236,236)"}>
                    <Box width="100%" margin={"auto"}>
                         <Box backgroundColor={"#FFFFFF"} mt={"25px"}>
                              <div className="ImageDetailDiv">
                                   <Box
                                        width={"100%"}
                                        backgroundColor={"#FFFFFF"}
                                        position={"relative"}
                                   >
                                        <Image
                                             width="100%"
                                             borderRadius={"5px"}
                                             display="block"
                                             margin="auto"
                                             src={obj.images[0].url}
                                        />
                                        <Image
                                             position={"absolute"}
                                             top="10%"
                                             width={"25%"}
                                             left="-2%"
                                             src="https://i.ibb.co/xL3pwP6/discounttag.png"
                                        />
                                   </Box>
                                   <Box
                                        backgroundColor={"#FFFFFF"}
                                        width="100%"
                                        mt={"30px"}
                                   >
                                        <Box backgroundColor={"#FFFFFF"}>
                                             <Box
                                                  backgroundColor={"#FFFFFF"}
                                                  display={"flex"}
                                                  width="100%"
                                                  margin="15px auto 5px 0px"
                                                  justifyContent="space-between"
                                             >
                                                  <Heading
                                                       textAlign="left"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       fontSize="20px"
                                                       fontWeight="600"
                                                       fontFamily="Rubik, sans-serif"
                                                       color="#181818"
                                                  >
                                                       {"brand"}
                                                  </Heading>
                                                  <Box
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                  >
                                                       <AiFillHeart
                                                            style={{
                                                                 color: "rgb(255,15,88)",
                                                                 fontSize:
                                                                      "22px",
                                                            }}
                                                       />
                                                  </Box>
                                             </Box>
                                             <Box
                                                  backgroundColor={"#FFFFFF"}
                                                  margin="5px auto 5px auto"
                                             >
                                                  <Text
                                                       textAlign="left"
                                                       fontSize={"22px"}
                                                       fontWeight={"300"}
                                                       fontFamily="Rubik, sans-serif"
                                                  >
                                                       {obj.name}
                                                  </Text>
                                             </Box>
                                             <Box
                                                  backgroundColor={"#FFFFFF"}
                                                  display={"flex"}
                                                  margin="20px auto 5px auto"
                                                  alignItems="center"
                                             >
                                                  <Text
                                                       mr={4}
                                                       textAlign="center"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       fontSize="24px"
                                                       fontWeight={600}
                                                       color="#231F20"
                                                  >
                                                       ₹{obj.price}
                                                  </Text>
                                                  <Text
                                                       mr={4}
                                                       textAlign="center"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       textDecoration={
                                                            "line-through"
                                                       }
                                                       fontSize="17px"
                                                       fontWeight={400}
                                                       color="#80797B"
                                                  >
                                                       MRP: ₹{obj.strikedprice}
                                                  </Text>
                                                  <Text
                                                       mr={4}
                                                       textAlign="center"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       fontSize="17px"
                                                       fontWeight={600}
                                                       color="#499B1F"
                                                  >
                                                       (10% OFF)
                                                  </Text>
                                             </Box>
                                             <Box
                                                  backgroundColor={"#FFFFFF"}
                                                  margin="5px auto 5px auto"
                                             >
                                                  <Text
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       textAlign={"left"}
                                                       fontSize="15px"
                                                       fontWeight={"14px"}
                                                       color="#80797B"
                                                  >
                                                       inclusive of all taxes
                                                  </Text>
                                             </Box>
                                             <Box
                                                  backgroundColor={"#FFFFFF"}
                                                  margin="25px auto 25px auto"
                                             >
                                                  <Text
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       textAlign="left"
                                                  >
                                                       <span
                                                            style={{
                                                                 textAlign:
                                                                      "left",
                                                                 backgroundColor:
                                                                      "#49A862",
                                                                 color: "#FFFFFF",
                                                                 padding: "1px 4px",
                                                            }}
                                                       >
                                                            4.2
                                                       </span>{" "}
                                                       <span
                                                            style={{
                                                                 textAlign:
                                                                      "left",
                                                                 fontSize:
                                                                      "14px",
                                                                 fontWeight:
                                                                      "600",
                                                                 color: "#212121",
                                                            }}
                                                       >
                                                            30
                                                       </span>{" "}
                                                       <span
                                                            style={{
                                                                 textAlign:
                                                                      "left",
                                                                 fontSize:
                                                                      "14px",
                                                                 fontWeight:
                                                                      "300",
                                                                 color: "#212121",
                                                            }}
                                                       >
                                                            Ratings
                                                       </span>{" "}
                                                  </Text>
                                             </Box>
                                        </Box>

                                        <Box
                                             backgroundColor={"#FFFFFF"}
                                             padding="15px auto 5px auto"
                                        >
                                             <Text
                                                  textAlign={"left"}
                                                  backgroundColor={"#FFFFFF"}
                                                  margin="25px auto 15px auto"
                                                  color="#231F20"
                                                  fontSize={"18px"}
                                                  fontWeight="600"
                                             >
                                                  AVAILABLE OFFERS
                                             </Text>
                                             <Box display={"flex"}>
                                                  <Box
                                                       margin={
                                                            "0px 10px 0px 0px"
                                                       }
                                                  >
                                                       <Image src="https://www.tatacliq.com/src/pdp/components/img/bank_offers.svg" />
                                                  </Box>
                                                  <Box>
                                                       <Text
                                                            textAlign={"left"}
                                                            margin="0px 0px 10px 0px"
                                                            color="#231F20"
                                                            fontSize={"14px"}
                                                            fontWeight="600"
                                                       >
                                                            15% off on AU Small
                                                            Finance Bank Limited
                                                            Debit & Credit
                                                            Cards.
                                                       </Text>
                                                       <Text
                                                            textAlign={"left"}
                                                            color="#231F20"
                                                            fontSize={"14px"}
                                                            fontWeight="300"
                                                       >
                                                            Use Code: AUCLIQ300
                                                            | Min Purchase:
                                                            ₹1500
                                                            <span
                                                                 style={{
                                                                      color: "#4C74E3",
                                                                      fontSize:
                                                                           "13px",
                                                                      fontWeight:
                                                                           "400",
                                                                      cursor: "pointer",
                                                                 }}
                                                            >
                                                                 more
                                                            </span>
                                                       </Text>
                                                  </Box>
                                             </Box>
                                        </Box>
                                        <Box
                                             backgroundColor={"#FFFFFF"}
                                             margin={"20px auto"}
                                             display={"flex"}
                                             justifyContent="left"
                                             alignItems="center"
                                        >
                                             <Button
                                                  _hover={{
                                                       backgroundColor: "red",
                                                  }}
                                                  onClick={() => {
                                                       addtowish();
                                                  }}
                                                  cursor="pointer"
                                                  colorScheme="red"
                                                  color="white"
                                                  border="none"
                                                  width="195px"
                                                  height="45px"
                                                  margin={"2% 1%"}
                                                  padding="0px 15px"
                                                  fontSize="13px"
                                                  fontWeight={"600"}
                                                  backgroundColor={
                                                       "rgb(218, 28, 92)"
                                                  }
                                                  borderRadius="22px"
                                                  variant="outline"
                                             >
                                                  SAVE FOR LATER
                                             </Button>

                                             <Button
                                                  disabled={
                                                       disabled ? true : false
                                                  }
                                                  backgroundColor={
                                                       disabled
                                                            ? "grey"
                                                            : "#FFFFFF"
                                                  }
                                                  onClick={() => {
                                                       handleAddToCart();
                                                  }}
                                                  cursor={
                                                       disabled
                                                            ? "not-allowed"
                                                            : "pointer"
                                                  }
                                                  color={
                                                       disabled
                                                            ? "white"
                                                            : "#FF1744"
                                                  }
                                                  border={
                                                       disabled
                                                            ? "2px solid grey"
                                                            : "2px solid #FF1744"
                                                  }
                                                  margin={"2% 1%"}
                                                  width="195px"
                                                  height="45px"
                                                  padding="0px 15px"
                                                  fontSize="13px"
                                                  fontWeight={"600"}
                                                  borderRadius="22px"
                                                  variant="outline"
                                             >
                                                  ADD TO BAG
                                             </Button>
                                        </Box>

                                        <Box backgroundColor={"#FFFFFF"}>
                                             <Accordion
                                                  defaultIndex={[0]}
                                                  allowToggle
                                             >
                                                  <AccordionItem
                                                       borderTop="1px solid #e2e2e2"
                                                       borderBottom="1px solid #e2e2e2"
                                                       padding={"20px 0px"}
                                                  >
                                                       <h2>
                                                            <AccordionButton
                                                                 backgroundColor={
                                                                      "white"
                                                                 }
                                                                 display="flex"
                                                                 justifyContent="left"
                                                                 border={"none"}
                                                            >
                                                                 <Text
                                                                      flex="1"
                                                                      fontSize={
                                                                           "14px"
                                                                      }
                                                                      color="#212121"
                                                                      fontWeight={
                                                                           "500"
                                                                      }
                                                                      textAlign="left"
                                                                 >
                                                                      Sold
                                                                      directly
                                                                      by BEST
                                                                      UNITED
                                                                      INDIA
                                                                      COMFORTS
                                                                      PVT LTD
                                                                 </Text>
                                                                 <AccordionIcon />
                                                            </AccordionButton>
                                                       </h2>
                                                       <AccordionPanel
                                                            borderTop="1px solid #e2e2e2"
                                                            mt={"20px"}
                                                            padding={"10px 0px"}
                                                            pb={4}
                                                       >
                                                            <Box>
                                                                 <Text
                                                                      fontSize="11px"
                                                                      fontWeight={
                                                                           "600"
                                                                      }
                                                                      margin="10px"
                                                                      color="#212121"
                                                                      textAlign={
                                                                           "left"
                                                                      }
                                                                 >
                                                                      Seller
                                                                      Rating:
                                                                      3.4
                                                                 </Text>
                                                                 <Text
                                                                      fontSize="11px"
                                                                      fontWeight={
                                                                           "600"
                                                                      }
                                                                      margin="10px"
                                                                      color="#212121"
                                                                      textAlign={
                                                                           "left"
                                                                      }
                                                                 >
                                                                      To contact
                                                                      seller
                                                                      please
                                                                      write to:
                                                                 </Text>
                                                                 <Text
                                                                      fontSize="11px"
                                                                      fontWeight={
                                                                           "400"
                                                                      }
                                                                      margin="10px"
                                                                      color="#212121"
                                                                      textAlign={
                                                                           "left"
                                                                      }
                                                                 >
                                                                      Seller
                                                                      Code:
                                                                      100115
                                                                 </Text>
                                                                 <Text
                                                                      fontSize="11px"
                                                                      fontWeight={
                                                                           "400"
                                                                      }
                                                                      margin="10px"
                                                                      color="#212121"
                                                                      textAlign={
                                                                           "left"
                                                                      }
                                                                 >
                                                                      C/o, Tata
                                                                      Unistore
                                                                      Ltd
                                                                 </Text>
                                                                 <Text
                                                                      fontSize="11px"
                                                                      fontWeight={
                                                                           "400"
                                                                      }
                                                                      margin="10px"
                                                                      color="#212121"
                                                                      textAlign={
                                                                           "left"
                                                                      }
                                                                 >
                                                                      Empire
                                                                      Plaza IT
                                                                      Park, B
                                                                      Wing, 4th
                                                                      Floor,
                                                                      North
                                                                      Side, CTS
                                                                      No. 9,
                                                                      Village
                                                                      Hariyali,
                                                                      LBS Marg,
                                                                      Vikhroli
                                                                      (W),
                                                                      Mumbai -
                                                                      400 083
                                                                 </Text>
                                                                 <Button
                                                                      width="100%"
                                                                      border="1px solid #DA1C5C"
                                                                      color="#DA1C5C"
                                                                      padding="10px"
                                                                      backgroundColor={
                                                                           "white"
                                                                      }
                                                                      borderRadius="5px"
                                                                      fontSize="14px"
                                                                      fontWeight={
                                                                           "600"
                                                                      }
                                                                 >
                                                                      Customer
                                                                      Care
                                                                 </Button>
                                                            </Box>
                                                       </AccordionPanel>
                                                  </AccordionItem>
                                             </Accordion>
                                        </Box>
                                   </Box>
                              </div>
                         </Box>

                         <Box
                              width="75%"
                              borderRadius={"7px"}
                              margin={"50px auto"}
                              backgroundColor={"#FFFFFF"}
                         >
                              <Accordion
                                   padding={"25px"}
                                   defaultIndex={[0]}
                                   allowMultiple
                              >
                                   <AccordionItem margin={"25px"}>
                                        <h2>
                                             <AccordionButton
                                                  backgroundColor={"#FFFFFF"}
                                                  border={"none"}
                                             >
                                                  <Box
                                                       flex="1"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       fontSize={"16px"}
                                                       fontWeight={"600"}
                                                       textAlign="left"
                                                  >
                                                       Product Description
                                                  </Box>
                                                  <AccordionIcon />
                                             </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                             pb={4}
                                             margin={"15px auto"}
                                        >
                                             <Box>
                                                  <Text
                                                       fontSize={"14px"}
                                                       margin={
                                                            "15px auto 25px auto"
                                                       }
                                                       fontWeight="300"
                                                  >
                                                       Refine your casual avatar
                                                       by slipping on this smart
                                                       and warm wine bomber
                                                       jacket from Jack & Jones.
                                                       Crafted from cotton
                                                       fabric, this bomber
                                                       jacket has a mandarin
                                                       collar, full sleeves and
                                                       self striped pattern.
                                                       Complement this regular
                                                       fit bomber jacket with a
                                                       simple tee to complete
                                                       the look.
                                                  </Text>
                                                  <Box
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       display="grid"
                                                       gridTemplateColumns="repeat(3,1fr)"
                                                       gap="45px"
                                                  >
                                                       <Box
                                                            backgroundColor={
                                                                 "#FFFFFF"
                                                            }
                                                            alignItems="left"
                                                       >
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Fit
                                                            </Text>
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Regular fit
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            backgroundColor={
                                                                 "#FFFFFF"
                                                            }
                                                            alignItems="left"
                                                       >
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Pattern
                                                            </Text>
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Self
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            backgroundColor={
                                                                 "#FFFFFF"
                                                            }
                                                            alignItems="left"
                                                       >
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Wash
                                                            </Text>
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Machine-wash
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            backgroundColor={
                                                                 "#FFFFFF"
                                                            }
                                                            alignItems="left"
                                                       >
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Color
                                                            </Text>
                                                            <Text
                                                                 backgroundColor={
                                                                      "#FFFFFF"
                                                                 }
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Wine
                                                            </Text>
                                                       </Box>
                                                       <Box
                                                            backgroundColor={
                                                                 "#FFFFFF"
                                                            }
                                                            alignItems="left"
                                                       >
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Model fit
                                                            </Text>
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Model is
                                                                 6'0"/185 cms
                                                                 and is wearing
                                                                 M
                                                            </Text>
                                                       </Box>
                                                       <Box alignItems="left">
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Neck/Collar
                                                            </Text>
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Mandarin collar
                                                            </Text>
                                                       </Box>
                                                       <Box alignItems="left">
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Sleeve
                                                            </Text>
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 Full Sleeves
                                                            </Text>
                                                       </Box>
                                                       <Box alignItems="left">
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="600"
                                                            >
                                                                 Fabric
                                                            </Text>
                                                            <Text
                                                                 fontSize={
                                                                      "14px"
                                                                 }
                                                                 fontWeight="300"
                                                            >
                                                                 98% Cotton, 2%
                                                                 Elastane
                                                            </Text>
                                                       </Box>
                                                  </Box>
                                             </Box>
                                        </AccordionPanel>
                                   </AccordionItem>

                                   <AccordionItem
                                        backgroundColor={"#FFFFFF"}
                                        margin={"25px"}
                                   >
                                        <h2>
                                             <AccordionButton
                                                  backgroundColor={"#FFFFFF"}
                                                  border={"none"}
                                             >
                                                  <Box
                                                       flex="1"
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                       fontSize={"16px"}
                                                       fontWeight={"600"}
                                                       textAlign="left"
                                                  >
                                                       Return & Refund
                                                  </Box>
                                                  <AccordionIcon
                                                       backgroundColor={
                                                            "#FFFFFF"
                                                       }
                                                  />
                                             </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                             pb={4}
                                             margin={"15px auto"}
                                        >
                                             <Text
                                                  fontSize={"16px"}
                                                  margin={"15px auto 15px auto"}
                                                  fontWeight={"300"}
                                             >
                                                  30 Days Easy Return
                                             </Text>
                                             <ul
                                                  style={{
                                                       fontSize: "14px",
                                                       fontWeight: "300",
                                                       textAlign: "left",
                                                  }}
                                             >
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       An order, once placed,
                                                       can be cancelled until
                                                       the seller processes it.
                                                  </li>
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       This product can be
                                                       returned within 30 day(s)
                                                       of delivery,subject to
                                                       the Return Policy.
                                                  </li>
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       For any other queries, do
                                                       reach out to CliQ Care at
                                                       90291 08282.
                                                  </li>
                                             </ul>
                                        </AccordionPanel>
                                   </AccordionItem>
                                   <AccordionItem margin={"25px"}>
                                        <h2>
                                             <AccordionButton
                                                  backgroundColor={"#FFFFFF"}
                                                  border={"none"}
                                             >
                                                  <Box
                                                       flex="1"
                                                       fontSize={"16px"}
                                                       fontWeight={"600"}
                                                       textAlign="left"
                                                  >
                                                       Know More
                                                  </Box>
                                                  <AccordionIcon />
                                             </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                             pb={4}
                                             margin={"15px auto"}
                                        >
                                             <ul
                                                  style={{
                                                       fontSize: "14px",
                                                       fontWeight: "300",
                                                       textAlign: "left",
                                                       listStyleType: "disc",
                                                  }}
                                             >
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       An order, once placed,
                                                       can be cancelled until
                                                       the seller processes it.
                                                  </li>
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       This product can be
                                                       returned within 30 day(s)
                                                       of delivery,subject to
                                                       the Return Policy.
                                                  </li>
                                                  <li
                                                       style={{
                                                            margin: "10px 20px",
                                                       }}
                                                  >
                                                       For any other queries, do
                                                       reach out to CliQ Care at
                                                       90291 08282.
                                                  </li>
                                             </ul>
                                        </AccordionPanel>
                                   </AccordionItem>
                                   <AccordionItem margin={"25px"}>
                                        <h2>
                                             <AccordionButton
                                                  backgroundColor={"#FFFFFF"}
                                                  border={"none"}
                                             >
                                                  <Box
                                                       flex="1"
                                                       fontSize={"16px"}
                                                       fontWeight={"600"}
                                                       textAlign="left"
                                                  >
                                                       Brand Info
                                                  </Box>
                                                  <AccordionIcon />
                                             </AccordionButton>
                                        </h2>
                                        <AccordionPanel
                                             pb={4}
                                             margin={"15px auto"}
                                        >
                                             <Text
                                                  style={{
                                                       fontSize: "14px",
                                                       fontWeight: "300",
                                                       textAlign: "left",
                                                  }}
                                             >
                                                  Keeping in mind the fiery
                                                  spirit of the youth along with
                                                  vibrant designs, Jack & Jones
                                                  is a clothing brand targeted
                                                  towards the fashion-forward
                                                  generation. Browse through
                                                  Tata CLiQ to get your hands on
                                                  Jack & Jones jackets and
                                                  shirts.
                                             </Text>
                                        </AccordionPanel>
                                   </AccordionItem>
                              </Accordion>
                         </Box>

                         <Box>
                              {data1?.map((el) => {
                                   return (
                                        <div className="mapD">
                                             <img src={el.img} alt="" />
                                        </div>
                                   );
                              })}
                         </Box>
                    </Box>
               </Box>
          </div>
     );
};

export { ProductDetail };
