import { GridItem, Grid, Text, Box, Img } from '@chakra-ui/react';
import React from 'react';

function Footer() {
    return (
        <Box border={'1px solid #F1F3F6'}>
            <Box  mt='1rem'>
                <Box display={"flex"} bg="white"  borderBottom="1px solid grey">
                    <Box w="55%">
                        <Grid templateColumns='repeat(3, 1fr)' bg="white" color="black" padding={{ base: '20px', md: '30px', lg: '40px' }} fontSize={{ base: '7px', md: '10px', lg: '13px' }} gap="15px">

                            <GridItem>
                                <Text color={"black"} fontWeight="bold"> Tata MarketPlace</Text>
                                <Text pt="4px" pb="4px">About Us</Text>
                                <Text pt="4px" pb="4px">Careers</Text>
                                <Text pt="8px" pb="4px">Sells With Us </Text>
                                <Text pt="4px" pb="4px">Terms of Use</Text>
                                <Text pt="4px" pb="4px">Privacy Policy </Text>
                                <Text pt="4px" pb="4px">Affiliates</Text>
                                <Text pt="4px" pb="4px"> Sitemap </Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="bold">Customer Service</Text>
                                <Text pt="4px" pb="4px"> Shopping</Text>
                                <Text pt="4px" pb="4px">Offers & Promotions</Text>
                                <Text pt="4px" pb="4px">Payments</Text>
                                <Text pt="4px" pb="4px"> Cancellation</Text>
                                <Text pt="4px" pb="4px">Returns & Refunds</Text>
                                <Text pt="4px" pb="4px">Return To Store </Text>
                                <Text pt="4px" pb="4px"> Contact Us</Text>
                                <Text pt="4px" pb="4px"> Reviews Guideline</Text>
                                <Text pt="4px" pb="4px"> Assembly Policy</Text>

                            </GridItem>
                            <GridItem>
                                <Text color={"black"} fontWeight="bold"> My Tata CLiQ</Text>
                                <Text pt="4px" pb="4px">My Account </Text>
                                <Text pt="4px" pb="4px">My Orders </Text>
                                <Text pt="4px" pb="4px">My Shopping Bag </Text>
                                <Text pt="4px" pb="4px">My Wishlist </Text>

                            </GridItem>

                        </Grid>
                    </Box>
                    <Box w="45%">
                        <Grid templateColumns='repeat(1, 1fr)' gap="15px"  color="black" padding={{ base: '20px', md: '30px', lg: '40px' }} fontSize={{ base: '7px', md: '10px', lg: '13px' }}>
                            <GridItem>
                                <Text color={"black"} fontWeight="bold" mb="10px" mr="300px">Tata CLiQ Offerings</Text>
                                <Text mb="10px">Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men |</Text>
                                <Text mb="10px">Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen Solly |</Text>
                                <Text mb="10px">Sparx Shoes | Gold Rings | Formal Shoes for Men | Sports Shoes for Men |</Text>
                                <Text mb="10px">Wallets for Men | Ladies Watches | Trolley Bags | Handbags for Women |</Text>
                                <Text mb="10px" ml="35px">Sling Bags for Women | Casual Shoes for Men | Boots for Men | Digital Watches |</Text>
                                <Text mb="10px">Sonata Watches | Sneakers for Women | Running Shoes | Puma Shoes |</Text>
                                <Text mb="10px">Boots for Women | Skechers | Malabargold | Fabindia | Utsa | Vark | Gia |</Text>
                                <Text mb="10px">LOV | Sitemap</Text>

                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;