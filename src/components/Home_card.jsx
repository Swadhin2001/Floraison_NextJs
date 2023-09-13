import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Home_card(props) {
    return (
        <>
            <div className="card rounded-0  border border-secondary explore-suits-cards">
                <Image src={props.card_image} className="card-img-top rounded-0" alt="..."/>
                    <div className="card-body  ">
                        <Link href={`${props.link}`} className="text-decoration-none">
                            <h4 className="card-body-h4">{props.card_heading}</h4>
                            <p className="card-body-p">{props.card_about}</p>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default Home_card
