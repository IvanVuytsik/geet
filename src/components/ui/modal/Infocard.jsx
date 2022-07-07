import React from 'react'
import './infocard.css'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Infocard = ({setShowInfo, text}) => {
  return (
    <div className="modal__wrapper">
        <div className="single__modal">
            {text}
            <span className="close__info"><AiOutlineCloseSquare size={30} onClick={()=>setShowInfo(false)} /></span>
         </div>  
    </div>
  )
}

export default Infocard