import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

function Herosection(props) {
  return (
    <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
      <div className={`home-banner index-herosection-banner ${props.banner_class}`} style = {{"backgroundImage" : `url(${props.banner.src})`}}>
            <div className="container-844 black-cards">
                <div className="row">
                    <div className={`col-md-auto black-card-hover ${props.india_entry_strat_active_submenu}`}>
                        <Link href="/india_entry_strategies" className="text-decoration-none text-white">India Entry Strategies</Link>
                    </div>
                    <div className={`col-md-auto black-card-hover ${props.india_subsidiary_active_submenu}`}>
                        <Link href="/india_subsidiary" className="text-decoration-none text-white">India Subsidiary</Link>
                    </div>
                    <div className={`col-md-auto black-card-hover ${props.subsidiary_active_submenu}`}>
                        <Link href="/subsidiary_support" className="text-decoration-none text-white">Subsidiary Support</Link>
                    </div>
                    <div className={`col-md-auto black-card-hover ${props.india_peo_service_active_submenu}`}>
                        <Link href="/india_peo_services" className="text-decoration-none text-white">India PEO Services</Link>
                    </div>
                    <div className={`col-md-auto black-card-hover ${props.small_business_support_active_submenu}`}>
                        <Link href="/small_business_support" className="text-decoration-none text-white">Small Business Support</Link>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Herosection