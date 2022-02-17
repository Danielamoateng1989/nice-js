import React from 'react'
import { Hero } from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import axios from 'axios'

const Homepage = ({product}) => {


  

  return (
    <>
     <Hero />
     <Products product={product} />
    </>
  )
}

export default Homepage