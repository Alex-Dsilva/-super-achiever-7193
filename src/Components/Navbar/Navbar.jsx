import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import "./navbar.css";
import { InputRightElement } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import MRS from './Icon/icon1.svg';
import url1 from "./Icon/coin1.webp";
import icon4 from "./Icon/icon4.webp";
import icon7 from "./Icon/icon7.webp";
import icon9 from "./Icon/icon9.webp";
import icon10 from "./Icon/icon10.webp";
import icon11 from "./Icon/icon11.webp";
import icon12 from "./Icon/icon12.webp";
import icon13 from "./Icon/icon13.webp";
import logo from "../../utils/logo.gif";
import { Flex, Box, Center, Image, Spacer, InputGroup, Input, InputLeftElement, Icon } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import { BsFillFilePlusFill, BsFillCreditCard2BackFill, BsBellFill, BsQuestionSquareFill, BsMic } from "react-icons/bs";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RiInboxUnarchiveFill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillHeart } from "react-icons/ai"
import { useDisclosure } from '@chakra-ui/react';


import { ReactSearchAutocomplete } from "react-search-autocomplete";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { Link, Navigate, NavLink } from "react-router-dom";
import { IoMdPower } from "react-icons/io";


const Navbar = () => {
  let correct;

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  const ref = useRef(null)

  const [hiddenDiv, setHiddenDiv] = useState(false)

  const [isLargerThan670] = useMediaQuery('(min-width: 730px)')

  const [data, setData] = useState([])

  const handleLogout =()=>{
    alert("Logout");
  }


  window.addEventListener("click",(e)=>{
    console.log(e.target.id, " check window ");
    if(e.target.id!=="inputBox"){
      setHiddenDiv(false)
    }
  })



  if (isLargerThan670) {
    return (
      <Box mt='0px' ml='-1px'>
        <Box mb='3.4rem' border={'1px solid black'}>
        <Flex bg="#212121" h="56px" align="center"  position='fixed' w='100%' zIndex={'100'}>
          <Spacer />
          <Box>
            <NavLink to='/'>
            <Box mr="10px" cursor={'pointer'} >
              <Image
                src={logo}
                alt="logo"
                h="50px"
                marginBottom="-5px"
              />
            </Box>
            </NavLink>
          </Box>

          {/* =======search======== */}

          <Box w="34%" pos={'relative'}>
            <InputGroup>
              <Input
                placeholder="Search for products"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                id='inputBox'
              />

              <InputRightElement
              pos='absolute' zIndex='10'
                children={
                  <IoSearchSharp
                    color="black"
                    cursor="pointer"
                    fontSize="23px"
                    fontWeight="bold"
                  />
                }
              />
            </InputGroup>
            <Box
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index}>
                    <NavLink to={`/products/view/${item.item_id}`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      
                      >
                        <Box maxH='32px' w='32px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.image}
                          
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.description}
                          
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
          </Box>


          {/* ======================================search end======================================= */}


          {/* {=============login end====================} */}



          <Popover trigger="hover" >
            <PopoverTrigger>
              <Box >
                <Text 
                color="white"
                mr="20px"
                ml="20px"
                fontWeight="bold"
                 >SignUp/SignIn</Text>
              </Box>
            </PopoverTrigger>
            <PopoverContent
              zIndex={4}
              bg="white"
              color="white"
              w="250px"
              borderRadius="2px"
              mt="5px"
            >
              <PopoverArrow bg="white" />

              <PopoverBody color="black" className='shade' >
                {
                  correct?"":
                  <Flex h="56px" justifyContent="space-between">
                  {/* <Center fontWeight="600" fontSize='14px'>New Customer?</Center> */}
                  <Button colorScheme='red' m="auto">Login/Register</Button>
                  <Center>
                    <Link color="#2874f0" fontSize='14px'>
                    </Link>
                  </Center>
                </Flex>
                }
                <hr margin="0px" />
                <Flex cursor={'pointer'} h="49px" fontSize='14px' className="pop1">
                  <Center ml='10px'><HiUserCircle color="black" size="18px" /></Center> <Center ml='16px'>My Account</Center>
                </Flex>
                <hr />
                
                {/* orderpage */}

                <NavLink to='/orderpage'>
                    <Flex  cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"  > 
                      <Center ml='10px'>
                          <RiInboxUnarchiveFill color="black" size="18px" />
                      </Center> 
                        <Center ml='16px'>
                          Orders History
                        </Center>
                    </Flex>
                </NavLink>
                <hr />
                
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><AiFillHeart color="black" size="18px" /></Center> <Center ml='16px'>My Wishlist</Center></Flex><hr />
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsFillCreditCard2BackFill color="black" size="18px" /></Center> <Center ml='16px'>Gift Card</Center></Flex><hr />
                <Flex cursor={'pointer'}  h="49px" fontSize='14px' className="pop1">  <Center ml='10px'><RiCoupon3Fill color="black" size="18px" /></Center><Center ml='16px'>CLiQ Cash</Center></Flex><hr />

                {
                  correct?
                  <Flex onClick={handleLogout} 
                  cursor={'pointer'} h="49px" fontSize='14px' className="pop1"> 
                <Center ml='10px'>
                  <IoMdPower color="#2874f0" size="18px" />
                </Center> 
                  <Center ml='16px'>
                  Log Out
                  </Center>
              </Flex>:""
                }
              </PopoverBody>
            </PopoverContent>
          </Popover>


          <NavLink to='./cart'>
            <Flex align={'center'} justify='' cursor={'pointer'}>
              <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />

              <Box
                fontSize="17px"
                ml="10px"
                textAlign="center"
                color="white"
                fontWeight="600"
              >
                Cart
              </Box>
            </Flex>
          </NavLink>

          <Spacer />
        </Flex>
      </Box>
      </Box>
    );
  }
  
  else {
    return (
    <Box mt='-1px' ml='-1px'>
      <Box mb='6.4rem' border={'1px solid blue'}>
      <Box position='fixed' w='100%' zIndex={'100'}>
      <Flex bg="black" h='52px' >
        <Center ml='10px' ref={btnRef} color='white' onClick={onOpen}>
          <HamburgerIcon color='white' fontSize='20px' />
        </Center>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            className="drawercontent">

            <DrawerHeader bg='black' color='white' h='40px' className="head"> <Center><FaUser pr='10px' fontSize='15px' /> &nbsp; Login & Signup</Center> <Center><Image src={logo} w='20px' h='20px' /></Center></DrawerHeader>

            <DrawerBody ml='-5px'>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={url1} w='15px' /></Center> <Center className="drawer" ml='16px'> All Categories</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon4} w='15px' /></Center><Center className="drawer" ml='16px'>Trending Stores</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon7} w='15px' /></Center> <Center className="drawer" ml='16px'> Offer Zone</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon9} w='15px' /></Center> <Center className="drawer" ml='16px'>My Orders</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon10} w='15px' /></Center> <Center className="drawer" ml='16px'>Coupons</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon11} w='15px' /></Center> <Center className="drawer" ml='16px'> My Cart</Center></Flex>
              <Flex h="38px" fontSize='14px'>  <Center ><Image src={icon12} w='15px' /></Center><Center className="drawer" ml='16px'>My Wishlist</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><Image src={icon13} w='15px' /></Center> <Center className="drawer" ml='16px'>My Account</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center className="drawer">Notification Preferences</Center></Flex>
              <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Help Center</Center></Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Center ml='10px' mt='5px'>
          <Box  >
            <Image
              src={logo}
              alt="tata"
              h="44px"
              marginBottom="-3px"
            />
            <Flex alignItems='center' >
              
            </Flex>
          </Box>
        </Center>
        <Spacer />
        <Center w='45px'><BsFillFilePlusFill color='white' /></Center>
        <Center w='45px'>
          <FaShoppingCart color='white' />
        </Center>
        
        <Center color='white' mr='10px'>
        {/* <Register/> */}
        </Center>
      </Flex>
      <Flex bg="black" h='52px'>
        <Center w='100%' ml='1%' mr='1%' pos={'relative'}> 
        <InputGroup pos={'relative'}>
            <Input
                placeholder="Search for products"
                bg="white"
                w="100%"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                id='inputBox'
              />
              <Box mt='10px' ml='-25px' zIndex={'100'}>
                <BsMic />
              </Box>
          
        </InputGroup>



          
        </Center>
      </Flex>


    </Box>
    </Box>
    </Box>
    )

  }





};
export default Navbar;
