import React from 'react'
import Image from 'next/image'

function Our_client_service_team(props) {
  return (
    <>
        <div className="card rounded-0  border border-secondary our-client-service-card" >
            <Image src={props.image} className="card-img-top rounded-0 leadership-team-card-img" alt="..." />
            <div className="card-body">
                <h4 className="card-body-h4 py-2">{props.card_heading}</h4>
                <p className="card-body-p">{props.card_about}</p>
            </div>
        </div> 
    </>
  )
}

export default Our_client_service_team
