import React from 'react'
import Image from 'next/image'

function India_subsidiary_card(props) {
    return (
        <div>
            <div className="card rounded-0  border border-secondary india-subsidiary-cards">
                <Image src={props.image} className="card-img-top rounded-0" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-body-h4">{props.card_heading}</h4>
                        <p className="card-body-p">{props.card_about}</p>
                    </div>
            </div>
        </div>
    )
}

export default India_subsidiary_card
