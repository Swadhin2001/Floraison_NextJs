import React, { useEffect } from 'react'
import Herosection from '@/components/Herosection'
import banner from '@/assets/india-entry-strategies-banner.jpg' 
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import image1 from '@/assets/Setting-up-a-local-subsidiary-is-a-great-option-for-business-access-into-India.jpg'
import image2 from '@/assets/With-Floraison-as-your-partner-however-the-complex-journey-is-made-simple.jpg'
import image3 from '@/assets/What-is-an-India-Subsidiary.jpg'
import image4 from '@/assets/Popular-subsidiaries-that-operate-in-India.jpg'
import image5 from '@/assets/Establishing-a-subsidiary-provides-much-needed-international-presence.jpg'
import image6 from '@/assets/Popular-subsidiaries-that-operate-in-India.jpg'
import Image from 'next/image'
import Footer from '@/components/Footer'
import India_subsidiary_card from '@/components/India_subsidiary_card'
import card_image1 from '@/assets/Legal-Entity-Setup.jpg'
import card_image2 from '@/assets/Approval-Registrations.jpg'
import card_image3 from '@/assets/Physical-Office-Setup.jpg'
import card_image4 from '@/assets/Accounting-Payroll-Setup.jpg'
import card_image5 from '@/assets/Tax-Compliance-Setup.jpg'
import card_image6 from '@/assets/Human-Resource-Setup.jpg'
import  {motion} from 'framer-motion'
import Navbar from '@/components/Navbar'

function india_subsidiary() {
    useEffect (()=>{
        document.title = "India Subsidiary - Floraison"
    },[]);
  return (
    <>  
    <Navbar/>
        <Herosection banner = {banner} india_subsidiary_active_submenu = "active-submenu"/> 
        {/* Home Page Body */}
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">India Subsidiary</h2>
                <p className="box-img-about">Establish your India legal entity with speed, agility and precision</p>
            </div>
            <Image_right image = {image1} image_heading = "Setting up a local subsidiary is a great option for business access into India" image_about = "But the process of setting up a subsidiary in India requires an accurate understanding & administration of the formalities and start-up procedures with a deep understanding of compliances with various laws. The sequence of implementing each activity in the process is as important as the process itself."/>

            <Image_left image = {image2} image_heading = "With Floraison as your partner, however, the complex journey is made simple" image_about = "We utilize our expertise and relationships with local vendors and service providers to harmonise and integrate various activities and holistically help you establish your presence in our country, in practically no time at all. You will be pleasantly surprised with the way we plan and hands-on implement setting up of your legal entity, keeping it simple, unassuming, and cost-effective process."/>

            <Image_right image = {image3} image_heading = "What is an India Subsidiary?" image_about = "An India subsidiary is a legal entity, typically a private limited company, duly set up in India that is controlled by the foreign holding company through ownership of between 51% to 100% of the subsidiary company’s equity share capital. This is the most popular & preferred option and more than 95% of global entities currently doing business in India own & operate their own subsidiary here"/>

            <Image_left image = {image4} image_heading = "Popular subsidiaries that operate in India" image_about = "Audi India, BMW India, Citi Bank, Coca Cola, CRISIL, DELL, Ford, Fox Star Studios, Hindustan Uniliver, General Motors, Hewlett Packard, IBM, Fullerton, Fujitsu, Samsung, Honda, HSBC, Hyundai, Intuit India, Mercedez Benz, LG, Microsoft, Nissan, Opel, Porsche, POSCO, Monsanto, Sony India, Star India, Suzuki, Skoda, Toyota, Vodafone, Walt Disney, Xerox India etc., are some large & popular subsidiaries of their foreign holding companies, set up & successfully operating in India"/>

            <Image_right image = {image5} image_heading = "Establishing a subsidiary provides much needed international presence" image_about = "International presence helps the organization widen its reach, expanding into a new market to establish a direct presence, hire employees directly, manufacture directly, sell directly, or meet whatever objectives it may have, specific to itself. When an American company has a subsidiary in India, the subsidiary is regarded as an Indian company & not an American one. This has significant local benefits"/>

            <div className="d-flex justify-content-center hidden-up-down">
                <div className="container-1200">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <Image
                                src={image6}
                                alt=""
                                className="box-images"
                            />
                        </div>
                        <div className="col-md-6 left-image-about">
                            <div className=" align-items-center">
                                <h4 className="mb-4 box-image-h4">Top Reasons for setting up a local subsidiary to do business in India</h4>
                                <div className="m-0 box-image-p">
                                    <ul className="box-image-p ps-4">
                                        <li>Setting up of India R&D or Development Centre</li>
                                        <li>Setting up of Back Office or Offshore Entity</li>
                                        <li>Expanding Brand Reach and Recognition</li>
                                        <li>Global Expansion Plan into New Strategic Locations</li>
                                        <li>Cost-effective Production, Assembling or Manufacturing</li>
                                        <li>Access to New Markets for Product or Raw Material</li>
                                        <li>Access to Technical Skills or Local Expertise</li>
                                        <li>Setting up of Captive Center or Shared Resource Centre</li>
                                        <li>Opening New Customer Service or Call Centre Facilities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Cards */}
        <div className="my-5">
            <motion.div className="text-center" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                <h4 className="cards-h4">Our Subsidiary Setup Services</h4>
            </motion.div>
            <div className="d-flex justify-content-center p-0 mb-5">
                <div className="container-925">
                    <div className="row mt-3 hidden-down-up">
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image1} card_heading = "Legal Entity Setup" card_about = "Our Corporate & Regulatory professionals will work with the Ministry of Corporate Affairs to effectively complete the formalities of registering & setting up the legal entity. They will follow it up with completing post incorporation process as well like supporting you with opening bank account, share capital structuring etc"/>
                        </div>
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image2} card_heading = "Approval & Registrations" card_about = "Our Corporate & Regulatory professionals will make applications & submissions with various federal and state authorities to complete certain applicable mandatory approvals & registrations. There is no standard checklist of approvals and registrations you may need, as this depends on the nature of your business"/>                            
                        </div>
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image3} card_heading = "Physical Office Setup" card_about = "Our Facility Management team will assist you with finalising your office space, negotiating for best terms for your office lease, and co-ordinate with our network of approved vendors for procurement of various goods and services, to ready your office for occupying, complete with all fit outs and amenities you may need."/>                      
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 hidden-down-up">
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image4} card_heading = "Accounting & Payroll Setup" card_about = "Our accounting professionals will help define your accounting and payroll objectives and set up an accounting system that best works for global & local requirements including consolidation. Setting up chart of accounts, defining accounting policies and procedures, and financial controls are part of this process"/>                         
                        </div>
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image5} card_heading = "Tax & Compliance Setup" card_about = "Setting up a reliable tax and compliance model is extremely critical to the success of your business, because these vary for every entity, based on the nature of their business. Our tax and compliance professionals will put together their thoughts to work out an accurate & optimal tax and compliance model."/>
                        </div>
                        <div className="col-md-4">
                            <India_subsidiary_card image = {card_image6} card_heading = "Human Resource Setup" card_about = "Let our human resource professionals use their expertise and experience to integrate and blend global flavours with inevitable local regulations, culture and values, while setting up your HR policies and practices culminating into a great employee handbook, for practical implementation in the subsidiary."/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default india_subsidiary
