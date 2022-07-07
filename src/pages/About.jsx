import React from 'react'
import '../styles/about.css'
import CommonSection from "../components/ui/common/CommonSection"
import { Container, Row, Col } from 'reactstrap'

function About() {
  return (
    <>
      <CommonSection title='About' />

      <section className='contact__section'>
        <Container>
          <Row>
            <Col lg='6' md="6"> 
              <h2>About</h2>
            </Col> 
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About