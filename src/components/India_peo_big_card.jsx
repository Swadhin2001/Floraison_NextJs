import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function India_peo_big_card(props) {
    return (
        <>
            <motion.div className='d-flex border border-secondary custom-card-body' initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                <Image src={props.image} alt="" className='custom-card-img' />
                <div className="india-peo-big-card-body">
                    <h4 className='long-card-h4 pb-3 m-0'>{props.card_heading}</h4>
                    <p className='long-card-p pe-1 m-0'>{props.card_about}</p>
                </div>
            </motion.div>
        </>
    )
}

export default India_peo_big_card
