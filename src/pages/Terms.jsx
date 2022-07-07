import React from 'react'
import '../styles/terms.css'
import CommonSection from "../components/ui/common/CommonSection"
import { Container, Row, Col } from 'reactstrap'

const Terms = () => {
  return (
    <>
      <CommonSection title='Terms' />

      <section className='contact__section'>
        <Container>
          <Row>
            <Col lg='6' md="6"> 
              <h2>Terms</h2>
            </Col> 
          </Row>
        </Container>
      </section>
    </>

  )
}

export default Terms