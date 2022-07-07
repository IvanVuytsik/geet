import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './showcase.css'
import Card from '../cards/Card'
import { DATA } from '../../../assets/data/data.js'

const Showcase = () => {
  return (
    <section className="showcase">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="showcase__top">
                        <h3>Showcase</h3>
                        <span><Link to='/explore'>Discover more...</Link></span>
                    </div>
                </Col>

                {
                    DATA.slice(0, 4).map((item)=>(
                        <Col lg='3' md='4' sm='6' key={item.id} className="showcase__card">
                            <Card item={item} />
                        </Col>
                    ))
                }
                     
            </Row>
        </Container>
    </section>
  )
}

export default Showcase