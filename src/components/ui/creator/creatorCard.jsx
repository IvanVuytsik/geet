import React from 'react'

const CreatorCard = (props) => {

const {id, desc, creator, creatorImg, price, firstUrl, secondUrl, thirdUrl } = props.item

 
  return (
        <div className="developer__card"> 

            <div className="developer__imgbox">
                <img src={creatorImg} alt="" className="developer__avatar" />
            </div>

            <div className="developer__content">
                <h6>{creator}</h6>
            </div>

        </div>
         
  )
}

export default CreatorCard