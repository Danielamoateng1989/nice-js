import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Services from '../components/Service'
import data from '../data'



const Homepage = () => {
  return (
   
    <React.Fragment>
      <Row>
        {data.map((service, id) => {
          console.log(service)
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={id}>
              <Services service={service} />
            </Col>
          )
        })}
      </Row>
    
    
    
    </React.Fragment>
  )
}

export default Homepage