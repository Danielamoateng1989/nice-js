import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Footer = () => {


    const years = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright  &copy;{years} Nice Inc.
                    </Col>
                </Row>      
            </Container>
           
        </footer>
    )
}

export default Footer
