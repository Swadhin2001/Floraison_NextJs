import React from 'react'
import Image from 'next/image'

function Subsidiary_support_card(props) {
  return (
    <>
        <div className="card rounded-0  border border-secondary subsidiary-support-card">
            <Image src={props.image} className="card-img-top rounded-0" alt="..."/>
            <div className="card-body">
                <h4 className="card-body-h4">{props.card_heading}</h4>
                <p className="card-body-p">{props.card_about}</p>
            </div>
        </div>
    </>
  )
}

export default Subsidiary_support_card
