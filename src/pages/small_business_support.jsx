import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import banner from '@/assets/small-business-support-banner.jpg'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import Floraison_advantage_card from '@/components/Floraison_advantage_card'
import image1 from '@/assets/Opportunities-galore-for-young-entrepreneurs-and-small-business-owners.jpg'
import image2 from '@/assets/Were-here-to-help-you-succeed-in-reaching-your-business-goals.jpg'
import image3 from '@/assets/Small-business-owners-no-longer-have-to-feel-vulnerable.jpg'
import image4 from '@/assets/Startups-with-or-without-Investor-backing-can-significantly-benefit-from-our-services.jpg'
import image5 from '@/assets/We-help-closely-held-and-family-owned-firms-to-professionalise-and-grow.jpg'
import image6 from '@/assets/Self-employed-and-other-professionals-can-depend-on-us.jpg'
import card_image1 from '@/assets/Consulting-and-Entity-Planning.jpg'
import card_image2 from '@/assets/Entity-Formation-and-Setup.jpg'
import card_image3 from '@/assets/Bookkeeping-and-Accounting_1.jpg'
import card_image4 from '@/assets/Payroll-and-Employee-Benefits_1.jpg'
import card_image5 from '@/assets/Tax-Management-and-Compliances_1.jpg'
import card_image6 from '@/assets/Corporate-and-Regulatory.jpg'
import card_image7 from '@/assets/Human-Resource-Services_1.jpg'
import card_image8 from '@/assets/Compilation-Reviews-and-Reporting.jpg'
import card_image9 from '@/assets/Annual-Audit-Tax-and-Other-Filings.jpg'
import Small_business_owners_card from '@/components/Small_business_owners_card'
import Footer from '@/components/Footer'
import {motion} from 'framer-motion'

function small_business_support() {
    useEffect (()=>{
        document.title = "Small Business Support - Floraison"
    },[]);
  return (
    <>
        <Navbar/>
        <Herosection banner = {banner} small_business_support_active_submenu = "active-submenu"/> 
        {/* Body Scetion */}
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">Small Business Support</h2>
                <p className="box-img-about">Providing support you need for long term viability of your business</p>
            </div>
            <Image_right image = {image1} image_heading = "Opportunities galore for young entrepreneurs & small business owners" image_about = "In the age of technology, it’s the instinct of innovation, creation, & disruption which drives young people to new ventures rather than just the urge or pressure to do something for a living. Entrepreneurs, the young especially, have been looking at exploiting trends like the IOT, AI, data analysis & machine learning to find solutions such as smart healthcare processes, smart retail operations, etc; To be honest, no time ever in Indian history was better to make a beginning than NOW" object_position = "object-pos-right"/>

            <Image_left image = {image2} image_heading = "We're here to help you succeed in reaching your business goals" image_about = "As a business owner, you work hard every single day. Whether it is managing your employees, overseeing your company’s day-to-day operations, or generating new ideas, you don’t have much time left over to deal with the financial side of your business. Business laws and regulations are getting tougher to comply. If generating revenues is tough, generating profits is tougher. No more worries. We are committed to work with you and be with you, to ease your business challenges, help you accelerate & grow your business" />

            <Image_right image = {image3} image_heading = "Small business owners no longer have to feel vulnerable" image_about = "In today’s fast-paced, competitive world, many businesses face unprecedented challenges. With years of proven expertise in business advisory, we make sure that business owners like you have the information – and insights – you need to remain competitive and ensure stability for your business for years to come. Our suite of services are designed to provide you with business essential services to help you comply with all that is applicable to your business." />

            <Image_left image = {image4} image_heading = "Startups - with or without Investor backing can significantly benefit from our services" image_about = "If you have just started your enterprise or about to start your dream venture, with or without Investor backing, we have a range of services designed exclusively for you. With a trusted partner providing you all the services you need as startup, you can free up and focus your time and energy on kickstarting, stabilising and growing your startup." />
            
            <Image_right image = {image5} image_heading = "We help closely held and family owned firms to professionalise and grow" image_about = "Closely held and family owned firms still dominate Indian business scene. While some have professionalised their approach, some still need professional handholding and guidance to help navigate the challenges of modern day business. You can count on us to be your friend, mentor and guide, while trusting us with reliable delivery of support services which will help you professionalise and grow your business." />

            <Image_left image = {image6} image_heading = "Self employed and other professionals can depend on us" image_about = "Self employed professionals in domains like IT, medical, engineering, legal, architects, etc being experts in their respective domains, solve client problems and make their lives better. We respect your professional contributions. It is our endeavour to support you holistically with our dependable services. We have customised a bouquet of services you may need from us and are happy to work with you." />

        </div>
        {/* Business & Sectors that are ideally suited for our services Starts */}
        <div className="my-5 ">
            <motion.div className="text-center" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
                <h4 className="cards-h4 pb-3">Business & Sectors that are ideally suited for our services</h4>
            </motion.div>
            <div className="d-flex justify-content-center">
                <div className="container-800">
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.2}}>
                            <p className="text-white small-black-cards">Information Technology</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.3}}>
                            <p className="text-white small-black-cards">Healthcare & Pharma firms</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.4}}>
                            <p className="text-white small-black-cards">E-Commerce firms</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.5}}>
                            <p className="text-white small-black-cards">Software firms</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.6}}>
                            <p className="text-white small-black-cards">Educational Institutions</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.7}}>
                            <p className="text-white small-black-cards">E-tailers</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.8}}>
                            <p className="text-white small-black-cards">Research & Development firms</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 0.9}}>
                            <p className="text-white small-black-cards">Self Employed Professionals</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1}}>
                            <p className="text-white small-black-cards">B2B Suppliers</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 "initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.1}}>
                            <p className="text-white small-black-cards">Engineering firms</p>
                        </motion.div>
                        <motion.div className="col-md-4 "initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.2}}>
                            <p className="text-white small-black-cards">Food & Beverage Industry</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.3}}>
                            <p className="text-white small-black-cards">Independent Service Providers</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.4}}>
                            <p className="text-white small-black-cards">Retailers & Distributors</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.5}}>
                            <p className="text-white small-black-cards">Logistics Service Providers</p>
                        </motion.div>
                        <motion.div className="col-md-4 "initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.6}}>
                            <p className="text-white small-black-cards">Management Consultants</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.7}}>
                            <p className="text-white small-black-cards">Manufacturers & OEM&apos;s</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.8}}>
                            <p className="text-white small-black-cards">Travel & Tourism firms</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 1.9}}>
                            <p className="text-white small-black-cards">Website Designers & Developers</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2}}>
                            <p className="text-white small-black-cards">Assemblers & Subcontractors</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2.1}}>
                            <p className="text-white small-black-cards">Entertainment & Media</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2.2}}>
                            <p className="text-white small-black-cards">Property owners & lessors</p>
                        </motion.div>
                    </div>
                    <div className="row g-0">
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2.3}}>
                            <p className="text-white small-black-cards">Small Scale Industries</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2.4}}>
                            <p className="text-white small-black-cards">Advertising & Publicity agencies</p>
                        </motion.div>
                        <motion.div className="col-md-4 " initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 , delay: 2.5}}>
                            <p className="text-white small-black-cards"></p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>

        {/* Benefit from the Floraison Advantage Starts */}
        <div className="my-5 pt-5">
            <motion.div className="text-center" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
                <h4 className="cards-h4 pb-3">Benefit from the Floraison Advantage</h4>
            </motion.div>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row">
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-1" card_heading = "Quick Start" card_about = "Time is money. Our hassle free & convenient Quick Business launch program created especially for you, ensures a flying start to your enterprise"/>
                        </div>
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-1" card_heading = "Flexible Services" card_about = "Our services are customised & tailored to suit your business based on your current needs. We propose & include future services when it is needed "/>                            
                        </div>
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-1" card_heading = "Simple Pricing" card_about = "We understand your budget constraints & have designed our services with simple & transparent pricing which makes us reliable, affordable & trustworthy"/>                     
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-2" card_heading = "Single Window" card_about = "All services you need to run critical business functions can be availed from us under one engagement, seamlessly, so you do not face any inconvenience"/>
                        </div>
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-2" card_heading = "Honest Deliverables" card_about = "We believe in delivering our engagement honestly & sincerely, keeping you informed of any & all developments which could potentially impact your business"/>
                        </div>
                        <div className="col-md-4">
                            <Floraison_advantage_card card_class = "benifit-floraison-card-2" card_heading = "Flexible Scale Up" card_about = "Our engagement can start with essentials. With time, as your business grows & diversifies, we can scale up our services so that you get what your business needs"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Services to Small Business Owners Starts */}
        <div className="my-5 pt-5">
            <div className="text-center">
                <h4 className="cards-h4">Our Services to Small Business Owners</h4>
            </div>
            <div className="d-flex justify-content-center p-0 mb-5">
                <div className="container-925">
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image1} card_heading = "Consulting & Entity Planning" card_about = "It could be that you are a first-time entrepreneur or have had prior experience of setting up legal entity & doing business, but just wished that you could get to do it much better than last time. Whatever be your case, remember that you can rely on our expert & professional entity planning and consulting abilities to help you get a head start in your journey into entrepreneurship."/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image2} card_heading = "Entity Formation & Setup" card_about = "The decision to start a new business is an exciting one, but as every experienced business owner knows, there is more to it than developing a product & hoping it sells. You are probably a “big picture” person with a broad vision and would rather not deal with small things. The key to forming a successful & long-lasting business is to plan the foundation well so things dont go wrong later."/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image3} card_heading = "Bookkeeping & Accounting" card_about = "As small business owner, you have more important things to do than to keep your own books. This is not done, if you are planning to professionally grow your business. We take care of your books for you, so you can get back to running your business. Accurate & timely bookkeeping is essential to your long-term viability for internal & external reasons."/>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image4} card_heading = "Payroll & Employee Benefits" card_about = "If you own a small business or just starting out, it makes a lot of sense to engage a payroll provider who can process payroll with a lot of experience and expertise. Engaging us ensure that your payroll is processed reliably accurately. We maintain the payroll system and history associated with it. We maintain confidentiality. Employees feel more satisfied with professional payroll services."/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image5} card_heading = "Tax Management & Compliances" card_about = "Despite the Government’s assurance for bringing reforms to improve the ease of doing business, tax laws and compliances are overwhelming and stressful. With so many critical details to consider, it’s easy to make errors or omissions inviting penalty, fine, or trouble with authorities. Our reliable tax and compliance services take care of all your obligations, so your risks are mitigated"/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image6} card_heading = "Corporate & Regulatory" card_about = "It is not enough that you have formed your legal entity with a lot of care and diligence. Ongoing compliance with regulations of ministry of corporate affairs and companies act are mandatory, if you are operating a limited company. Our company secretary will ensure that we make periodic filings & submissions & maintain all the needed records and meet all your corporate & regulatory obligations. "/>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image7} card_heading = "Human Resource Services" card_about = "Managing your own employees, & motivating them to perform to their optimal ability is a top challenge for several business owners who are not expected to naturally be ‘people’ persons and often finding themselves getting into wrong situations with employees. We professionally manage your employees through implementation of industry best practices and great HR policies."/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image8} card_heading = "Compilation, Reviews & Reporting" card_about = "As business owner, you are accountable to creditors, private investors & shareholders, who are interested in ensuring that the company’s financial statements accurately represent the true financial position of the company. We have developed methodologies to collate & review financial information to present them in the form of management reports, for business decision making."/>
                        </div>
                        <div className="col-md-4">
                            <Small_business_owners_card image = {card_image9} card_heading = "Annual Audit, Tax & Other Filings" card_about = "Based on the type of entity you have formed,  nature of business you are into and volume of your turnover or gross revenues, you will need to get your books of accounts audited under different laws like Companies Act, Income Tax Act, GST laws etc. You will need to do annual tax returns and other filings under these laws. We help you with these services professionally and help you stay compliant."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default small_business_support
