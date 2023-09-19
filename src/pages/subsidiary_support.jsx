import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import banner from '@/assets/subsidiary-support-banner.jpg'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import Subsidiary_support_card from '@/components/Subsidiary_support_card'
import image1 from '@/assets/Planning-the-monthly-professional-support-engagement.jpg'
import image2 from '@/assets/Our-engagement-commences-with-well-defined-strategic-road-map.jpg'
import image3 from '@/assets/Experience-our-committed-support-services-as-we-strive-to-deliver-excellence.jpg'
import image4 from '@/assets/Honest-deliverables-under-single-window-concept.jpg'
import image5 from '@/assets/Our-services-are-not-off-the-shelf-but-tailored-to-suit-your-unique-requirement.jpg'
import image6 from '@/assets/Strict-month-closures-professional-reporting-assurance.jpg'
import card_image1 from '@/assets/Bookkeeping-and-Accounting.jpg'
import card_image2 from '@/assets/Payroll-and-Employee-Benefits.jpg'
import card_image3 from '@/assets/Tax-Management-and-Compliances.jpg'
import card_image4 from '@/assets/Corporate-and-Regulatory.jpg'
import card_image5 from '@/assets/Human-Resource-Services.jpg'
import card_image6 from '@/assets/Consolidation-Reviews-Reporting.jpg'
import card_image7 from '@/assets/Virtual-CFO-Services.jpg'
import card_image8 from '@/assets/Annual-Audit-Tax-Other-Filings.jpg'
import card_image9 from '@/assets/Business-Support-Services.jpg'
import Footer from '@/components/Footer'
import {motion} from 'framer-motion'

function subsidiary_support() {
    useEffect (()=>{
        document.title = "Subsidiary Support - Floraison"
    },[]);
  return (
    <>
        <Navbar/>
        <Herosection banner = {banner} banner_class = "subsidiadry-support-hero-banner" subsidiary_active_submenu = "active-submenu"/> 
        {/* Body Section */}
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">Subsidiary Support</h2>
                <p className="box-img-about">Experience our reliable, honest and professional ongoing support services</p>
            </div>

            <Image_right image = {image1} image_heading = "Planning the monthly professional support engagement" image_about = "Having worked with entrepreneurs across different countries, we know that understanding you, your culture, expectations and your unique requirements are the key to a successful engagement. Right after the formation of your subsidiary, we will execute a letter of engagement(LOE) for mutually agreed ongoing monthly professional support services, so that you receive our support from the start."/>

            <Image_left image = {image2} image_heading = "Our engagement commences with well-defined strategic road map" image_about = "After signing the letter of engagement mutually, we get started immediately. Our execution team is introduced and they simply get down to business pro-actively. Our engagement commences with a well defined strategic road map which considers all future growth plans you may have shared with us. With time, as your business grows and diversifies, we can scale up our services so that you get what your business needs."/>

            <Image_right image = {image3} image_heading = "Experience our committed support services as we strive to deliver excellence" image_about = "Our professional support services are customised and tailored to suit the holistic requirements of the subsidiary and the holding company all through our engagement. You can absolutely be assured that during the entire course of our execution, we will lead you to do the right thing, in the right way, at the right time, as we strive to deliver excellence."/>

            <Image_left image = {image4} image_heading = "Honest deliverables under single window concept" image_about = "We work closely with our clients, yet independently, and encourage open and transparent communication, keeping you informed of all developments, which could potentially impact your business.  All services you need to run critical business functions can be availed from us under one engagement, so you don’t have to look for other providers and face inconvenience"/>

            <Image_right image = {image5} image_heading = "Our services are not 'off the shelf' but tailored to suit your unique requirement" image_about = "We have always believed that each client is unique and each client situations are unique. We do not believe in the one size fits all solution. Each engagement is designed uniquely to cater to your specific requirement. We state with pride that we serve our clients with high degree of professionalism and personal touch, guiding them at each step, and with pricing model that is flexible to their growing needs."/>

            <Image_left image = {image6} image_heading = "Strict month closures, professional reporting & assurance" image_about = "A special and consistent feature of our engagement is  generation of professionally designed management reports for client discussions and the assurance we provide to our clients at the end of each month that all’s well. We follow strict month closure formalities."/>

        </div>


        {/* Card Section */}
        <section className="my-5 pt-5">
            <motion.div className="text-center hidden-up-down" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                <h4 className="cards-h4">Our Subsidiary Support Services</h4>
            </motion.div>
            <div className="d-flex justify-content-center p-0 mb-5">
                <div className="container-925">
                    <div className="row mt-3 hidden-down-up">
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image1} card_heading = "Bookkeeping & Accounting" card_about = "Accurate & timely bookkeeping is essential to your subsidiary’s long-term viability for internal & external reasons. Our trusted and dedicated bookkeeping team will professionally manage invoicing, revenue accounting, AP and AR, bank transactions, book closing, preparation of periodic financial statements, inter-co accounts etc"/>
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image2} card_heading = "Payroll & Employee Benefits" card_about = "Payroll management is a very sensitive function which effects your employees in several ways including their take home salaries. It needs to be accurate, timely, confidential and in adherence to local labour and tax laws. Our payroll team will deliver effective payroll services, leading to high levels of employee satisfaction."/>
                            
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image3} card_heading = "Tax Management & Compliances" card_about = "Indian tax laws and compliance obligations are quite complicated with several filings, computations and remittances periodically. Compliances need detailed understanding, expertise and experience to handle, which our tax and compliance team are adept at and will professionally manage for you."/>
                            
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 hidden-up-down">
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image4} card_heading = "Corporate & Regulatory" card_about = "Ongoing compliance with ministry of corporate affairs regulations and Indian companies act are mandatory for the subsidiary. Our company secretary will ensure that we make periodic filings and submissions, maintain all records, conduct periodic board and members meetings and ensure good corporate governance."/>
                            
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image5} card_heading = "Human Resource Services" card_about = "Floraison provides your subsidiary an array of human resource services with the fundamental objective of strengthening relationship with your employees. You can be assured of professionally managing your employees through industry best practices & policies that integrates global flavour with local requirements."/>
                            
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image6} card_heading = "Consolidation, Reviews & Reporting" card_about = "We have developed methodologies to professionally compile, review and analyse financial information and present suitable management reports for your business decision making, each month. We also provide support with accurate consolidation of subsidiary and holding company books."/>
                            
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 hidden-up-down">
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image7} card_heading = "Virtual CFO Services" card_about = "With our virtual CFO services, you will get access to a qualified and experienced financial professional who understands your specific financial, regulatory and reporting needs and helps you make the right decisions you need, to guide your business to future success in India. You pay him only for the hours used."/>
                            
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image8} card_heading = "Annual Audit, Tax & Other Filings" card_about = "The subsidiary will need to get its books of accounts audited under different laws like Companies Act, Income Tax Act and GST laws. You will need to do annual tax returns and other filings. You will need professional help to complete these mandatory annual obligations and to stay compliant with applicable laws"/>
                            
                        </div>
                        <div className="col-md-4">
                            <Subsidiary_support_card image = {card_image9} card_heading = "Business Support Services" card_about = "We provide critical business support services like lending registered office address and resident nominee director services, vendor identification and management, assist with procurement of goods and services, co-ordinate with external agencies for office insurance, housekeeping, security and front office."/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default subsidiary_support
