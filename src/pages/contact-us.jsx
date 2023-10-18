import React from 'react'
import Head from 'next/head'
import Herosection from '@/components/Herosection'
import banner from '@/assets/contact-us-header.jpg'
import Image from 'next/image'
import Footer from '@/components/Footer'
import map from "@/assets/map.jpg"
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'

function contact_us() {
  return (
    <>
     <Head>
      <title>Contact Us - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
        <Navbar contact_us_active="active-navbar"/>
      <Herosection banner = {banner}/>
      {/* Body Section */}
      <div className="my-5 py-5 body-mobile">
        <div className="text-center mb-5 hidden-up-down">
            <h2 className="box-img-heading m-0">Contact us</h2>
        </div>
        <div className="d-flex justify-content-center hidden-up-down">
            <div className="container-1140">
                <div className="row">
                    <motion.div className="col-md-6" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.5 }}>
                        <div className="mobile-padding-contact-us">
                            <Form></Form>
                        </div>
                    </motion.div>
                    <motion.div className="col-md-6 mt-4 mobile-padding-contact-us" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1, delay: 0.8 }}>
                        <Image src={map} alt=""/>
                        <p className="blue-card-p text-center px-5 py-4">For any corporate or support inquiries or if you would like to know more about Floraison, please write to us at:</p>
                        <div className="bg-black">
                            <h4 className="text-center text-white map-h4 px-3 py-4 m-0">Floraison India Strategic Consulting Pvt Ltd</h4>
                            <p className="text-white text-center pb-4">
                                185/7, 2nd Floor, Chandra Plaza <br/>
                                8th F Main Road, 26th Cross <br/>
                                Chandra Plaza, Jayanagar 3rd Block <br/>
                                Bangalore – 560011, Karnataka, India <br/>
                                Phone: 91-80-26538257 <br/>
                                Email: start@floraison.in 
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
    <Footer contact_us_active="active-footer"/>
    </>
  )
}

export default contact_us
