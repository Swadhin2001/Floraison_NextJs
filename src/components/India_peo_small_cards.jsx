import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function India_peo_small_cards(props) {
    return (
        <>
            <div className="card rounded-0  border border-secondary india-peo-small-card">
                <div className="bg-black small-card-heading">
                    <h4 className="small-card-h4 text-center">{props.card_heading}</h4>
                </div>
                <div className=" text-center small-card-p">
                    <p className="card-text">{props.card_about}</p>
                </div>
            </div>
        </>
    )
}

export default India_peo_small_cards
