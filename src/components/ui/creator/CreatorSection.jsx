import React from 'react'
import './creatorsection.css'
import { Container, Row, Col } from 'reactstrap'
import CreatorCard from './creatorCard'
import { CREATORS_DATA } from '../../../assets/data/data'


const CreatorSection = () => {
  return (
    <section className="developer__section">
      <Container>
        <Row>
          <Col lg='12'>
            <div className="developer__title">
              <h3>Top Creators</h3>
            </div>
          </Col>
   
            
          {
            CREATORS_DATA.map(item => (
              <Col lg='2' md='3' sm='4' xs='6' key={item.id}>
                <CreatorCard item={item} />
              </Col>
            ))
          }
           

        </Row>
      </Container>
    </section>
  )
}

export default CreatorSection