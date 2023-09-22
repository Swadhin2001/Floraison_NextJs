import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'

function Leadership_team_card(props) {
  return (
    <>
        <motion.div className="card rounded-0  border border-secondary leadership-team-card" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
            <Image src = {props.image} className="card-img-top rounded-0 leadership-team-card-img" alt = ""/>
            <div className="card-body">
                <h4 className="card-body-h4 py-2">{props.card_heading}</h4>
                <p className="card-body-p">{props.card_about}</p>
            </div>
        </motion.div>
    </>
  )
}

export default Leadership_team_card
