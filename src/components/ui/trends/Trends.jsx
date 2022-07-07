import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { DATA } from '../../../assets/data/data.js'
import Card from '../cards/Card'
import './trends.css'

const Trends = () => {
  return (
    <section className='trends__section'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h3 className='trends__title'>Collections</h3>
                </Col>


                {
                    DATA.slice(0,8).map((item)=>(
                        <Col lg='3' md='4' sm='6' key={item.id} className='trends__card'>
                            <Card item={item}/>
                        </Col>
                    ))
                }


            </Row>
        </Container>
    </section>
  )
}

export default Trends