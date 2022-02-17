import React from 'react'
import products  from "../data"
import {useLocation} from 'react-router-dom'

const Servicespage = () => {

  //Getting location of the product that was clicked
  const location = useLocation()

  //Let's declare a variable named path and set it to location.pathname.split("/")[1]
  //We will put it into an array and the get the id which wwill be the 3 item with and index of [2]
  const path = location.pathname.split("/")[2]


  const product = products.find(p => p.id.toString() === path)
  return (
    <React.Fragment>

      <h1>{product.name}</h1>
      <img src={product.image} />
      <h1>{product.description}</h1>
      <h1>{product.price}</h1>
      <h1>{product.rating} {product.numberOfReviews} reviews</h1>
      <button>Book Now</button>

    </React.Fragment>
  )
}

export default Servicespage