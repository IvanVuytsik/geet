import React from 'react'
import '../styles/contact.css'
import CommonSection from "../components/ui/common/CommonSection"
import { Container, Row, Col } from 'reactstrap'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <CommonSection title='Contact Details' />

      <section className='contact__section'>
        <Container>
          <Row>
            <Col lg='6' md="6"> 
              <article className="contact__option">
                <h4><FaTelegramPlane size={20} /> Please send your message to</h4>
                <h5>spielville@gmail.com</h5>
                <a href="https://tsique.vercel.app/" target="_blank">Or visit devs <span>web page...</span></a>
              </article>
            </Col> 
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact