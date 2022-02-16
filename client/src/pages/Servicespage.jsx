import React from 'react'
import data from '../data'
import {useLocation} from 'react-router-dom'



const Servicespage = () => {

  const location = useLocation()

  console.log(location)

  return (
    <React.Fragment>

      <h1>Service Details</h1>

    </React.Fragment>
  )
}

export default Servicespage