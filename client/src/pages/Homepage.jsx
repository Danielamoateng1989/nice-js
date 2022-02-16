import React from 'react'
import { Hero } from '../components/Hero/Hero'
import Products from '../components/Products/Products'





const Homepage = ({product}) => {
  return (
    <>
     <Hero />
     <Products product={product} />
    </>
  )
}

export default Homepage