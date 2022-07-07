import React from 'react'
import "../styles/create.css"
import CommonSection from '../components/ui/common/CommonSection'
import { Container, Row, Col } from 'reactstrap'

const Create = () => {
  return (
    <>
      <CommonSection title="Card Generator"/>

      <section className='contact__section'>
        <Container>
          <Row>
            <Col lg='6' md="6"> 
              <h2>Please select one of the cards to edit...</h2>
            </Col> 
          </Row>
        </Container>
      </section>
    </>

  )
}

export default Create