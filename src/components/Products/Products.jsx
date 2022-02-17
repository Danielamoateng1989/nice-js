import { Box } from '@chakra-ui/react'
import  React, {useState, useEffect} from 'react'
import { ProductCard } from './ProductCard'
import  products  from '../../data'
import { ProductGrid } from './ProductGrid'
import axios from 'axios'


 const Products = () => (


  const []
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)

export default Products