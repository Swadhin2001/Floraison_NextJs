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

function contact_us() {
  return (
    <>
     <Head>
      <title>Contact Us - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
        <Navbar/>
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
                            <form>
                                <div className="mb-3">
                                    <div className='form-p form-focus shadow-none blue-card-p'>
                                        <p>
                                            “Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives”
                                        </p>
                                        <p>
                                            At Floraison, the most important thing we can do today is sit down and talk. Talk about your past experiences, the current situations, trends in your industry, what is working well for you and what is not, your goals for this year and the future. We will expand upon that discussion and help you identify your options, weigh your choices, help you make rational decisions and also put your plans into action.
                                        </p>
                                        <p>
                                            As professionals, we know that talking and strategically planning with you is how we can best advice and serve you. Working with you as your key strategic consultant, we can help you respond to changing situations and environments and adapt your plans and strategies to meet your changing needs and goals.
                                        </p>
                                        <p>
                                            That’s why we say the most important thing we can do today is sit down and talk. Today and regularly.
                                        </p>
                                        <p>
                                            Give us a call today. <br/>
                                            You talk. We’ll listen. <br/>
                                            Then we can get to work! <br/>
                                        </p>
                                        Please fill the below form for your assistance
                                    </div> 
                                </div>
                                <div className="mb-1">
                                    <input type="text" id="TextInput" className="form-control rounded-0 form-focus shadow-none input-item" placeholder="Name*" required />
                                </div>
                                <div className="mb-1">
                                    <input type="email" id="TextInput" className="form-control rounded-0 form-focus shadow-none input-item" placeholder="Business Email*" required/>
                                </div>
                                <div className="mb-1">
                                    <input type="text" id="TextInput" className="form-control rounded-0 form-focus shadow-none input-item" placeholder="Phone Number*"  required/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control form-focus shadow-none input-item" placeholder="How can he help?*" id="floatingTextarea"></textarea>
                                </div>
                                <div className="mb-3">
                                    <p className='form-p form-focus shadow-none blue-card-p'>We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from PandR. You can unsubscribe at any time. For details, view our  
                                    <a href = "./privacy-policy.html" className='text-decoration-none'> Privacy Policy</a>.</p>
                                </div>
                                <button type="submit" className="btn btn-dark rounded-0">Get in Touch</button>
                            </form>
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
    <Footer/>
    </>
  )
}

export default contact_us
