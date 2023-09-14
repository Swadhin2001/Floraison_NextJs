import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

function Home_card(props) {
    return (
        <>
            <motion.div className="card rounded-0  border border-secondary explore-suits-cards" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
                <Image src={props.card_image} className="card-img-top rounded-0" alt="..."/>
                    <div className="card-body  ">
                        <Link href={`${props.link}`} className="text-decoration-none">
                            <h4 className="card-body-h4">{props.card_heading}</h4>
                            <p className="card-body-p">{props.card_about}</p>
                        </Link>
                    </div>
            </motion.div>
        </>
    )
}

export default Home_card
