import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    VStack,
    Text,
    useToast
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  import { Link,useNavigate } from "react-router-dom";

  import { FcGoogle } from "react-icons/fc";
  import { BsFacebook } from "react-icons/bs";

  
  export default function Signup() {
    
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const toast =useToast()
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload={
        name,
        email,
        password
        
      }
      
    }

  
    return (
      <Box
      bgImage="url(https://i.ibb.co/k0JL8gg/vecteezy-clothing-store-customers-are-choosing-clothes-and-a-staff-is-4145772.jpg)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
      >
        <Box
          align="center"
          color="white"
          fontFamily="Montserrat - 700"
          fontSize="36px"
          fontWeight="700"
          fontStyle="normal"
          h={20}
          display="block"
        >
          <img
            style={{ height: "60px" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Tata_Cliq_logo.svg/1200px-Tata_Cliq_logo.svg.png"
            alt="tataQicon"
          />
        </Box>
        <Flex align="center"  justify="center" m={"auto"} h="100vh" w={["96%","65%","45%"]}>
          <Box bg="white" p={39} rounded="md" textAlign={"center"}>
            <Heading variant={"solid"}>Welcome to Tata CLiQ</Heading>
            <Text variant={"ghost"}>Continue with</Text>
            <br />
            <Box direction={{ base: 'column', md: 'column',lg:'row' }}>
              <Flex gap={4} justifyContent="center">
                <Box>
                  <Button
                    variant="outline"
                    colorScheme={"#50b6ff"}
                    // onClick={handlegoogleSignUp}
                  >
                    <FcGoogle />
                  </Button>
                 
                </Box>
                <Button 
                // onClick={handleFacebookSignUp} 
                variant="outline" colorScheme={"#50b6ff"}>
                  <BsFacebook />
                </Button>
                <Box>
                </Box>
              </Flex>
              <br />
              <Text variant={"ghost"}>Or</Text>
            </Box>
  
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name" variant={"smooth"}>
                    Username
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Enter a name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" variant={"smooth"}>
                    Email
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password" variant={"smooth"}>
                    Password
                  </FormLabel>
                  <Input
                    isInvalid
                    errorBorderColor="black"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" bg="crimson" color="white" width="full" _hover={"teal"}>
                  CREATE ACCOUNT
                </Button>
                <Box alignSelf="center">
                  <Text fontSize="lg">
                    Already a member? <Link to="/login">Sign in</Link>
                  </Text>
                </Box>
                <Box alignSelf="center">
                  <Text variant={"outline"}>
                    By continuing, you agree to our Terms of Use and <Text color={"pink.600"}>Privacy Policy.</Text>
                  </Text>
                </Box>
                <br />
              </VStack>
            </form>
          </Box>
        </Flex>
        <br/>
        <br/>
        <br/>
        <br/>
      </Box>
      
    );
  }
