import React from 'react'
import Image from 'next/image'

function Small_business_owners_card(props) {
  return (
    <>
        <div className="card rounded-0  border border-secondary small-business-card">
            <Image src={props.image} className="card-img-top rounded-0" alt="..."/>
            <div className="card-body">
                <h4 className="card-body-h4">{props.card_heading}</h4>
                <p className="card-body-p">{props.card_about}</p>
            </div>
        </div>
    </>
  )
}

export default Small_business_owners_card
