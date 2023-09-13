import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

function Leadership_team_card(props) {
  return (
    <>
        <div className="card rounded-0  border border-secondary leadership-team-card">
            <Image src = {props.image} className="card-img-top rounded-0 leadership-team-card-img"/>
            <div className="card-body">
                <h4 className="card-body-h4 py-2">{props.card_heading}</h4>
                <p className="card-body-p">{props.card_about}</p>
            </div>
        </div>
    </>
  )
}

export default Leadership_team_card
