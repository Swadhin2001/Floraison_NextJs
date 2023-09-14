import React from 'react'
import {motion} from 'framer-motion'

function Floraison_advantage_card(props) {
  return (
    <>
        <motion.div className={`card rounded-4 card-body-new ${props.card_class}`} initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <div className="new-card-body text-center">
                <h4 className="new-card-body-h4 pt-3 pb-2">{props.card_heading}</h4>
                <p className="card-body-p new-card-body-p ">{props.card_about}</p>
            </div>
        </motion.div>
    </>
  )
}

export default Floraison_advantage_card
