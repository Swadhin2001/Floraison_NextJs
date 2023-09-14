import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Our_current_open_pos_card(props) {
  return (
    <>
        <motion.div className={`d-flex border border-secondary ${props.card_class}`} initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <Image src={props.image} alt="" className={`${props.image_class}`} style = {`${props.object_position}`}/>
            <div className="india-peo-big-card-body">
                <h4 className='long-card-h4 pb-3 m-0'>{props.card_heading}</h4>
                <p className='long-card-p pe-1 m-0'>{props.card_about}</p>
            </div>
        </motion.div>
    </>
  )
}

export default Our_current_open_pos_card
