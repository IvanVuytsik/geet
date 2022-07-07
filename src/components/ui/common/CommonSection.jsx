import React from 'react'
import { Container } from 'reactstrap'
import './commonsection.css'

const CommonSection = ({title}) => {
  return (
     
    <section className='common__section'>
        <Container className="text__center"><h2>{title}</h2></Container>
    </section>
  )
}

export default CommonSection