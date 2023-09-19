import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import banner from '@/assets/our-leadership-header-banner.jpg'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Leadership_team_card from '@/components/Leadership_team_card'
import image1 from '@/assets/Always-leading-from-the-front.jpg'
import image2 from '@/assets/Advising-and-focusing-on-implementation-what-we-do-best.jpg'
import image3 from '@/assets/As-strategic-consultants-we-want-to-go-further.jpg'
import image4 from '@/assets/Our-vision-and-creative-strategies.jpg'
import card_image1 from '@/assets/prakash-kamath.jpg'
import card_image2 from '@/assets/Entity-Formation-and-Setup.jpg'
import card_image3 from '@/assets/anuradha-b.jpg'
import card_image4 from '@/assets/ronak-nd.jpg'
import card_image5 from '@/assets/pranav-kamath.jpg'
import card_image6 from '@/assets/siddappa.jpg'
import card_image7 from '@/assets/CA-Goutham-Kini.jpg'
import card_image8 from '@/assets/CA-Prakyath-S.jpg'
import card_image9 from '@/assets/cs-neha-sancheti.jpg'
import card_image10 from '@/assets/Bharathesh-M.jpg'
import card_image11 from '@/assets/Murali-J.jpg'
import card_image12 from '@/assets/Vinay-DT.jpg'
import card_image13 from '@/assets/vruti-mehta.jpg'
import card_image14 from '@/assets/kavya-m.jpg'
import Our_client_service_team from '@/components/Our_client_service_team'
import Footer from '@/components/Footer'
import {motion} from 'framer-motion'



function our_leadership() {
  return (
    <>
    <Head>
      <title>Our Leadership - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
        <Navbar/>
        <Herosection banner = {banner}/> 
        {/* Body Section */}
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">Our Leadership Team</h2>
                <p className="box-img-about">Turning Vision into Value</p>
            </div>

            <Image_left image = {image1} image_heading = "Always leading from the front" image_about = "We do not dream about success but work for it!  We are at the forefront of every engagement because we know every engagement is unique and needs careful & special attention. We are always involved with all the nitty gritties of execution because we believe success lies in giving attention to details. Thats why we believe in leading from the front and giving every client more than our 100%"/>

            <Image_right image = {image2} image_heading = "Advising and focusing on implementation - what we do best" image_about = "Not only do we provide advice, but we are also responsible for its practical elaboration and implementation. We never lose sight of the broader context, legal framework and theoretical foundations, but our ambition is to provide our clients with answers. The goal is to provide practical, realistic and workable solutions to every issue."/>

            <Image_left image = {image3} image_heading = "As strategic consultants, we want to go further" image_about = "We want to participate in the creation of value. We want to be at your side with crucial decisions. We offer strategic financial advice and are a sounding board for entrepreneurs and boards of directors. Our strengths are knowledge and experience, independence and commitment, a broad vision and critical depth."/>

            <Image_right image = {image4} image_heading = "Our vision & creative strategies" image_about = "It is our vision to facilitate entry of global entities into India set up their ventures here, to do business & succeed. We are always thinking of ways to support new-age entrepreneurs to create & nurture their dream ventures & grow rapidly. Our vision and creative strategies are our key differentiators and our clients know that."/>
        </div>

        {/* Our Leadership Team Section */}
        <div className="my-5">
            <div className="text-center">
                <h4 className="cards-h4">Our Leadership Team</h4>
            </div>
            <div className="d-flex justify-content-center p-0 mb-5">
                <div className="container-925">
                    <div className="row mt-3 hidden-down-up">
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image1} card_heading = "Prakash Kamath" card_about = "India CPA,  Co- Founder, Heads the Consulting Practice of India Entry Strategies for Global Clients & New Age Entrepreneur Support for Domestic Clients"/>
                            
                        </div>
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image2} card_heading = "Geetha Kamath" card_about = "Co-Founder, Director and Chairperson, Heads Corporate Governance, Finance and Accounts, Compensation & Benefits and Human Resources"/>
                            
                        </div>
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image3} card_heading = "Anuradha B" card_about = "Director, Chief Operating Officer, Heads Human Resource Services,  India PEO , Consulting & Business Planning for Global  & Domestic Clients"/>
                            
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 hidden-down-up">
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image4} card_heading = "Ronak N D" card_about = "India CPA, Heads Client Servicing – Bookkeeping, Payroll & Compliances, Manages Entity Support for Global & Domestic Clients"/>
                            
                        </div>
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image5} card_heading = "Pranav Kamath" card_about = "Associate Director, Leads India entry strategies for global clients, India PEO, Startup India, Offshore assignments"/>
                            
                        </div>
                        <div className="col-md-4">
                            <Leadership_team_card image = {card_image6} card_heading = "Siddappa" card_about = "Heads Information Technology, Systems Administration, Network Operations & Business Support Services for Global & Domestic Clients"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Client Service Team Section */}
        <div className="my-5">
            <div className="text-center">
                <h4 className="cards-h4">Our Client Servicing Team</h4>
            </div>
            <div className="d-flex justify-content-center p-0 mb-5">
                <div className="container-925">
                    <div className="row mt-3 hidden-down-up">
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.5}}>
                            <Our_client_service_team image = {card_image7} card_heading = "CA Goutham Kini" card_about = "Manager Finance & Accounts"/>
                        </motion.div>
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.7}}>
                            <Our_client_service_team image = {card_image8} card_heading = "CA Prakyath S" card_about = "Manager Finance & Accounts"/>                            
                        </motion.div>
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.9}}>
                            <Our_client_service_team image = {card_image9} card_heading = "CS Neha Sancheti" card_about = "Manager Corporate & Regulatory"/>                           
                        </motion.div>
                    </div>
                    <div className="row mt-4 mb-4 hidden-down-up" >
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.1}}>
                            <Our_client_service_team image = {card_image10} card_heading = "Bharathesh M" card_about = "Manager Finance & Accounts"/>                            
                        </motion.div>
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.3}}>
                            <Our_client_service_team image = {card_image11} card_heading = "Murali J" card_about = "Manager Finance & PEO"/>                           
                        </motion.div>
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.5}}>
                            <Our_client_service_team image = {card_image12} card_heading = "Vinay DT" card_about = "Manager Finance & Accounts"/>                           
                            
                        </motion.div>
                    </div>
                    <div className="row mt-4 mb-4 d-flex justify-content-center hidden-down-up">
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.7}}>
                            <Our_client_service_team image = {card_image13} card_heading = "CA Vruti Mehta" card_about = "Consultant"/>                       
                        </motion.div>
                        <motion.div className="col-md-4" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.9}}>
                            <Our_client_service_team image = {card_image14} card_heading = "Kavya M" card_about = "Manager Human Resources"/>                             
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default our_leadership
