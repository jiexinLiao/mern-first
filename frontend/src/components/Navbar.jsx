import { Box, Button, Container, Flex, HStack, Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { CgAdd } from "react-icons/cg";

import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {

const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex 
      h={16} 
      alignContent={'Center'}
      justifyContent={'space-between'}
       flexDir={{
        base:'column',
        sm:'row'
       }}
       >

<Box color="red.500">Hello</Box>

         
         <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					    <Link to={"/"}>Product Store 🛒</Link>
				</Text>

      
        <HStack spacing={2} alignItems={'center'}>
          <Link to={'/create'}>
                  <Button>
                        <CgAdd  fontSize={20} />
                  </Button>
          </Link>
          <Button onClick={to}>
          {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar
