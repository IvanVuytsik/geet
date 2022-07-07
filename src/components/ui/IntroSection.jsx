import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { FaCogs } from 'react-icons/fa'
import { SiOpenstreetmap } from 'react-icons/si'
import './introsection.css'


const IntroSection = () => {
  return (
    <section className="intro__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="intro__content">
                        <h2>
                            Generative assets for<span>digital</span>applications    
                            
                        </h2>
                        <p> Create assets for games, web and more... </p>

                        <div className="intro__btnbox">
                            <button><Link to='/explore'><SiOpenstreetmap size={20} /> Explore </Link></button>
                            <button><Link to='/create'><FaCogs size={20} /> Create </Link></button>
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>
    </section>

  )
}

export default IntroSection