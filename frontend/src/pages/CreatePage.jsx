import { Box, Button, Container, Heading, Input, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {

    const [newProduct, setNewProduct] = useState ({
      name : '',
      price : '',
      image: ''
    })
    const toast = useToast()

  const {createProduct} = useProductStore
const handleAddProduct = async() => {
  const {success, message} = await createProduct(newProduct)
  if(!success){
    toast({
      title:'error',
      description:message,
      status:'error',
     isCloseable: true,
    })
  }
  setNewProduct({name: '', price: '', image: ''})
}


  return (
    <Container maxW={'container.sm'}>
      <VStack 
      spacing={8}
      >
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Create new ProDUCT
        </Heading>

        <Box
          w={'full'} bg={useColorModeValue('white','gray.800')}
          p={6} rounded={'lg'} shadow={'md'}
        >

          <VStack spaceX={4}>
            <Input placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct,name: e.target.value})}
            />
            <Input placeholder='price'
            name='price'
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct,price: e.target.value})}
            />
            <Input placeholder='Img url'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct,Image: e.target.value})}
            />
            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
              Add Product
            </Button>

          </VStack>

        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
