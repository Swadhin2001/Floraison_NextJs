import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import banner from '@/assets/resource-center-header.jpg'
import Resources_card from '@/components/Resources_card'
import card_image1 from '@/assets/Floraison-Small-Business-Support-border-new.jpg'
import Footer from '@/components/Footer'
import {motion} from 'framer-motion'

function resources_center() {
  return (
    <>
      <Navbar/>
      <Herosection banner = {banner}/>
      {/* Body Starts*/}
        <div className="my-5 py-4 body-mobile">
            <motion.div className="text-center mb-5 " initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
                <h2 className="box-img-heading m-0">Our Resource Center</h2>
                <p className="box-img-about">e-brochures, e-publications and e-books to foster your knowledge</p>
            </motion.div>
            <motion.div className="text-center mb-5 " initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
                <h4 className="cards-h4">e-brochures</h4>
                <p className="cards-p">Learn more about our service offerings</p>
            </motion.div>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row ">
                        <motion.div className="col-md-6 pe-3" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.5 }}>
                            <Resources_card image = {card_image1} card_heading = "India Entry Strategies" card_about1 = "INDIA SUBSIDIARY" card_about2 = "Learn more about our mission to promote & formulate the entry of global organizations into Indian markets through effective pre-entry, entry & post entry strategies, well supported by experts with reliable execution"/>
                        </motion.div>
                        <motion.div className="col-md-6 card-padding" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.7 }}>
                            <Resources_card image = {card_image1} card_heading = "Small Business Support" card_about1 = "ENTITY SETUP & SUPPORT" card_about2 = "Explore about our mission to cultivate the spirit of entrepreneurship among potential domestic entrepreneurs & learn how we can support them with entity formation & entity support"/>
                        </motion.div>
                    </div>
                    <div className="row mt-5 ">
                        <motion.div className="col-md-6 pe-3" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.5 }}>
                            <Resources_card image = {card_image1} card_heading = "India Entry Strategies" card_about1 = "INDIA PEO" card_about2 = "Find out more about how you can Jump start your business in India without having to set up a legal entity. Learn how you can still hire the best talents in India & grow your business exactly the way you planned to"/>
                        </motion.div>
                        <motion.div className="col-md-6 card-padding" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.7 }}>
                            <Resources_card image = {card_image1} card_heading = "Professional Support Services" card_about1 = " " card_about2 = "Floraison provides committed monthly professional support services  to global & domestic entrepreneurs operating in India. Know more about these services as we combine expertise with unrivalled passion for delivering excellence in every engagement."/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default resources_center
