import React from 'react'
import Image from 'next/image'

function Why_join_floraison_card(props) {
  return (
    <>
        <div className='d-flex border border-secondary custom-card-body'>
            <Image src={props.image} alt="" className='custom-card-img'/>
            <div className="india-peo-big-card-body">
                <h4 className='long-card-h4 pb-3 m-0'>{props.card_heading}</h4>
                <p className='long-card-p pe-1 m-0'>{props.card_about}</p>
            </div>
        </div> 
    </>
  )
}

export default Why_join_floraison_card
