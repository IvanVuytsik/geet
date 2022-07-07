import React from 'react'
import '../styles/geetdetails.css'
import CommonSection from '../components/ui/common/CommonSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { DATA }  from '../assets/data/data.js'
import { BiRocket } from 'react-icons/bi'
import { FaDice } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Generator from '../components/engine/Generator'
import Test from '../components/engine/Test'
 
//--------------------------------------------------------------
const GeetDetails = () => {
 
  //-------------------------------------------------------------------------
  const {id} = useParams()
  const singleCard = DATA.find(item => item.id === id)
 
  // const CardFrame = styled.div` 
  //   padding: 1rem;
  //   align-items: center;
  //   justify-content: center;
  //   background: ${singleCard.cardStyle};
  //   border-radius: 20px;
  // `;
 
  //--------------------------------------------------------------------
   
  return (
    <>
      <CommonSection title={singleCard.title} />
      {/* <Generator /> */}
      <Test />
    </>
    )
  }

export default GeetDetails



          // {/* <Row>  */}
          //   {/* <Col className='editcard__col'>
          //     <CardFrame>
          //       <div className='editcard__box'>
          //           <img src={singleCard.imgUrl} alt='' className="editcard__img" />
          //       </div>

          //       <div className='editcard__content'>
          //           <div className='editcard__menu'>
          //               <button className="editcard__generate" >
          //                 <BiRocket size={20} /> Generate
          //               </button>

          //               <button className="editcard__randomize" >
          //                 <FaDice size={20} /> Randomize
          //               </button>
          //           </div>

          //       </div>
          //     </CardFrame>
          //   </Col>

          //   <Col>

          //   </Col>

          //   <Col>

          //   </Col> */}



          // {/* <Col lg='6'>
          //   <div className="editcard__icons">
          //     <h2>{singleCard.info}</h2>
          //   </div>
          // </Col> */}