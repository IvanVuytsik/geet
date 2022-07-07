import React, { useState } from 'react'
import './card.css'
import Infocard from '../../ui/modal/Infocard'
import { Link } from 'react-router-dom'
import { BsFillGearFill } from 'react-icons/bs' 
import styled from 'styled-components'

const Card = (props) => {

  const {title, id, info, price, authorImg, imgUrl, author, cardStyle} = props.item

  const [showInfo, setShowInfo] = useState(false);

  const Cardbg = styled.div`
    background: ${cardStyle};
    `;


  return (
        <Cardbg className='single__card'>

            <div className='card__img'>
                <img src={imgUrl} alt='' />
            </div>

            <div className='card__content'>
                <h5 className='card__title'>{title}</h5>

                <div className="creator__data">

                    <div className="creator__img">
                        <img src={authorImg} alt='' />
                    </div>

                    <div className="creator__info">
                        <div>
                            <h5>Author</h5>
                            <p>{author}</p>
                        </div>

                        <div>
                            <h5>Cost</h5>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>

                <div className='get__menu'>
                    <button className="get__btn">
                        <Link to={`/create/${id}`}><BsFillGearFill /> Edit </Link> 
                    </button>

                    <button className="info__btn" onClick={()=>setShowInfo(true)} >
                        <Link to="#">View Info</Link>
                    </button>

                    {showInfo && <Infocard setShowInfo={setShowInfo} text={info}/>}

                </div>

            </div>
        </Cardbg>
  )
}

export default Card