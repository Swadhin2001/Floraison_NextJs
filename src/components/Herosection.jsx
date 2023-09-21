import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

function Herosection(props) {
  return (
    <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}} className='herosection'>
      <div className={`home-banner index-herosection-banner ${props.banner_class}`} style = {{"backgroundImage" : `url(${props.banner.src})`}}>
            <div className="container-844 black-cards">
                <div className="row">
                    <Link className={`col-md-auto black-card-hover ${props.india_entry_strat_active_submenu} text-decoration-none`} href="/india-entry-strategies">
                        <p  className=" text-white m-0 p-0">India Entry Strategies</p>
                    </Link>
                    <Link className={`col-md-auto black-card-hover ${props.india_subsidiary_active_submenu} text-decoration-none`} href="/india-subsidiary">
                        <p  className=" text-white m-0 p-0">India Subsidiary</p>
                    </Link>
                    <Link className={`col-md-auto black-card-hover ${props.subsidiary_active_submenu} text-decoration-none`} href="/subsidiary-support">
                        <p  className=" text-white m-0 p-0">Subsidiary Support</p>
                    </Link>
                    <Link className={`col-md-auto black-card-hover ${props.india_peo_service_active_submenu} text-decoration-none`} href="/india-peo-services">
                        <p className=" text-white m-0 p-0">India PEO Services</p>
                    </Link>
                    <Link className={`col-md-auto black-card-hover ${props.small_business_support_active_submenu} text-decoration-none`} href="/small-business-support">
                        <p  className=" text-white m-0 p-0">Small Business Support</p>
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Herosection