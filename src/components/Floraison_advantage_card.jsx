import React from 'react'

function Floraison_advantage_card(props) {
  return (
    <>
        <div className={`card rounded-4 card-body-new ${props.card_class}`}>
            <div className="new-card-body text-center">
                <h4 className="new-card-body-h4 pt-3 pb-2">{props.card_heading}</h4>
                <p className="card-body-p new-card-body-p ">{props.card_about}</p>
            </div>
        </div>
    </>
  )
}

export default Floraison_advantage_card
