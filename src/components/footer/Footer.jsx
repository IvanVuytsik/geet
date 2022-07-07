import React from 'react';
import './footer.css';
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { GiPuzzle } from "react-icons/gi";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaItchIo, FaSteamSquare } from "react-icons/fa";

import logo_img from '../../assets/images/geet_icon.png'


//------------------------------------------
const RESOURCES = [
  {
    display: 'Help',
    url: '/Help',
  },
 
]

//------------------------------------------
const COMPANY = [
  {
    display: 'About',
    url: '/About',
  },
  {
    display: 'Terms',
    url: '/Terms',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
]
//------------------------------------------

const Footer = () => {
  return (
    
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='3' sm='12' className="logo__box">
            <div className="logo">
              <h2>
                <img src={logo_img} />
                {/* <span><GiPuzzle size={40} /></span> */}
                Geet.io
              </h2>
              <p>Generative Assets</p>
            </div>
          </Col>


          <Col lg='2' md='3' sm='6' className="info__box">
            <h5>Information</h5>
            <ListGroup className="list__group">
              {
                RESOURCES.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}> {item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6' className="company__box">
            <h5>Service</h5>
            <ListGroup className="list__group">
              {
                COMPANY.map((item, index) => (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}> {item.display} </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6' className="newsletter__box">
            <h5>Media</h5>
            <div className="social__links">
              {/* <span><Link to='#'><FiInstagram /></Link></span>
              <span><Link to='#'><FiTwitter /></Link></span> */}
              <span><Link to='#'><FaItchIo /></Link></span>
              {/* <span><Link to='#'><FaSteamSquare /></Link></span> */}
            </div>
          </Col>
 
          <Col lg="12" className='copyright'>
            <p> &copy; Generative Assets. All rights reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer