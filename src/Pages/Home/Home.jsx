import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Circle, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Slider from 'react-slick'
import '../Home/home.css'
import { motion } from 'framer-motion';


const Home = () => {
const images=[
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45548090884126.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822749726.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822782494.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822815262.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822848030.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45536787791902.gif'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822913566.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822946334.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822979102.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519823011870.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45519822880798.jpg'},
]


const first_block=[
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45539107635230.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45539109175326.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45536789692446.jpg'},
    {img:'https://assets.tatacliq.com/medias/sys_master/images/45536789954590.jpg'}
]

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,marginBottom:'1cm', position:'relative'}}
        onClick={onClick}
      />
    );
  }
    const settings = {
       dots:true,
        arrows:true,
        nextArrow:<SamplePrevArrow/>,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };



      const settingsone = {
        infinite: true,
      
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

      

  return (
    <>
     <div>
       <Box w='100%' mt='4cm'>
        <Slider {...settings}>
           
            <img   position='absolute' src='https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg' alt='sl'/>
            <img  position='relative' src='https://assets.tatacliq.com/medias/sys_master/images/45581159006238.jpg' alt='sl'></img>
            <img  position='relative' src='https://assets.tatacliq.com/medias/sys_master/images/45584593518622.gif' alt='sl'></img>
            <img  position='relative' src='https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg' alt='sl'></img>
            <img  position='relative' src='https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg' alt='sl'></img>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/45605712035870.jpg'  alt='sl'></img>
        </Slider>
        </Box>
        <Box  display='flex' mt='1cm' w='100%'>
            {images.map((e)=>(
                <Box key={e} cursor='pointer'>
                    <Image boxSize='138px' src={e.img} alt='wait'></Image>
                </Box>
            ))}
        </Box>
        <Box margin='auto' w='19cm' mt='1cm'display='flex'>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45451412570142.jpg'></Image>
            <Image ml='10px' src='https://assets.tatacliq.com/medias/sys_master/images/45433290981406.jpg'></Image>
        </Box>

        <Box margin='auto' w='70%'  > 
        <Box mt='2cm'w='full' justifyContent='space-around'>
         <Slider {...settingsone}>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45539107635230.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45539109175326.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45536789692446.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45536789954590.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45588212875294.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45539109175326.jpg'></Image>
            </motion.div>
         </Slider>
         </Box>
        </Box>
        <Box margin='auto'>
         <Button mt='2cm' w='14cm' h='2cm' bgColor='#ffcc99' fontSize='2rem' borderRadius='40px'>
            DEALS WHEEL
         </Button>
         <Text fontSize='1.5rem' fontWeight='medium'>Grab thede before they're gone</Text>
        </Box>
        <Box margin='auto' w='70%'  > 
        <Box mt='2cm'w='full' justifyContent='space-around'>
         <Slider {...settingsone}>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45587495813150.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}} >
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45619560218654.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image cursor='pointer' src='https://assets.tatacliq.com/medias/sys_master/images/45581157826590.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45554457673758.jpg'></Image>
            </motion.div>
             <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45581157957662.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45567395594270.jpg'></Image>
            </motion.div>

         </Slider>
         </Box>
        </Box>
        <Box margin='auto'>
         <Button mt='2cm' w='14cm' h='2cm' bgColor='#ffcc99' fontSize='2rem' borderRadius='40px'>
            NEW ON CLIQ
         </Button>
         <Text fontSize='1.5rem' fontWeight='medium'>Fresh PIQ'S to choose from</Text>
        </Box>
        <Box w='100%' mt='2cm'>
        <Image w='full' src='https://assets.tatacliq.com/medias/sys_master/images/45605721473054.gif' alt='welcome'></Image>
        </Box>
        <Box w='70%' margin='auto' mt='1.5cm'>
         <Image src='https://assets.tatacliq.com/medias/sys_master/images/45032248639518.jpg' alt='loading'></Image>
        </Box>

        <Box margin='auto' w='70%'  > 
        <Box mt='2cm'w='full' justifyContent='space-around'>
         <Slider {...settingsone}>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45576213397534.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}} >
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45581156089886.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image cursor='pointer' src='https://assets.tatacliq.com/medias/sys_master/images/45581156155422.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45581156220958.jpg'></Image>
            </motion.div>
             <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45587502989342.jpg'></Image>
            </motion.div>
            <motion.div whileHover={{scale:1.1}}>
            <Image src='https://assets.tatacliq.com/medias/sys_master/images/45581156352030.jpg'></Image>
            </motion.div>

         </Slider>
         </Box>
        </Box>
     </div>
    </>
  )
}

export default Home