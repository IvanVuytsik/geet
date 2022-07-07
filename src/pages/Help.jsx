import React from 'react'
import '../styles/help.css'
import CommonSection from "../components/ui/common/CommonSection"
import { Container, Row, Col } from 'reactstrap'

const Help = () => {
  return (
       <>
      <CommonSection title='Help' />

      <section className='contact__section'>
        <Container>
          <Row>
            <Col lg='6' md="6"> 
              <h2>Help and FAQ</h2>
            </Col> 
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Help