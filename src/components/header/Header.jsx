import React, { useRef, useEffect } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

import logo_img from '../../assets/images/geet_icon.png'

//----------------------------------------------
const NAVLINKS = [
  {
    display: 'Home',
    url: '/home',
  },
  {
    display: 'Explore',
    url: '/explore',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
 
]


//----------------------------------------------
const Header = () => {

  const headerRef = useRef([]);
  const menuRef = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ){
        headerRef.current.classList.add("header__shrink")
      }
      else{
        headerRef.current.classList.remove("header__shrink")
      }
    })

    return () => {
      window.removeEventListener("scroll", []);
    };

  }, []);

  
  const toggleMenu = () => menuRef.current.classList.toggle('active__menu')

  return (
    <header className="header" ref={headerRef}>
      <Container className="header__box">
        <div className="navigation">
          <div className="logo">
            <h2>
              <img src={logo_img} />
              Geet.io
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAVLINKS.map((item, index) => ( 
                <li className="nav__item" key={index}>
                  <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">        
            <span className="mobile__menu">
              <GiHamburgerMenu onClick={toggleMenu} />
            </span>
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header