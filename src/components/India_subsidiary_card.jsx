import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function India_subsidiary_card(props) {
    return (
        <div>
            <motion.div className="card rounded-0  border border-secondary india-subsidiary-cards" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                <Image src={props.image} className="card-img-top rounded-0" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-body-h4">{props.card_heading}</h4>
                        <p className="card-body-p">{props.card_about}</p>
                    </div>
            </motion.div>
        </div>
    )
}

export default India_subsidiary_card
