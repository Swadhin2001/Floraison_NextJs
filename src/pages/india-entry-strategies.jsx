import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import banner from '@/assets/india-entry-strategies-banner.jpg'
import image1 from '@/assets/Understanding-India-for-making-right-beginning-is-the-key-to-sustainable-growth-here.jpg'
import image2 from '@/assets/Legal-statutory-and-regulatory-matters-are-critical-for-you-to-know.jpg'
import image3 from '@/assets/Tax-compliance-and-accounting-matters-that-could-affect-your-business-are-good-to-know-in-advance.jpg'
import image4 from '@/assets/Prior-knowledge-of-Indias-economic-industry-and-business-landscape-make-you-feel-confident.jpg'
import image5 from '@/assets/Indias-political-cultural-and-social-demography-may-have-an-impact-on-how-you-do-business-here.jpg'
import image6 from '@/assets/India-Subsidiary-OR-India-PEO.jpg'
import image7 from '@/assets/Is-it-possible-to-convert-from-one-option-to-the-other.jpg'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {motion} from 'framer-motion'

function india_entry_strategies() {
  return (
    <>
    <Head>
      <title>India Entry Strategies - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <Navbar/>
      <Herosection banner={banner} india_entry_strat_active_submenu = "active-submenu"/>
      {/* Box Image Right and Left */}
        <div className="body">
            <div className="text-center mb-5  " >
                <h2 className="box-img-heading m-0">India Entry Strategies</h2>
                <p className="box-img-about">One purpose. Multiple options</p>
            </div>
            <Image_left image = {image1} image_heading = "Understanding India for making right beginning is the key to sustainable growth here" image_about = "It could be that this is the first time ever you are considering setting up & doing business in India. Or it could be that you have had prior experience of setting up & doing business in India, but just wished that you could get to do it much better than last time. Remember that you can rely on our expert & professional consulting abilities to help you get a head start in India – by knowing about India first."/>

            <Image_right image = {image2} image_heading = "Legal, statutory and regulatory matters are critical for you to know" image_about = "Before creating a business in India, you need to know and understand about the types of entity you can form, merits, demerits & suitability of these entities, applicable legal, statutory and regulatory matters, ownership, directorship, management and control related matters. These aspects make a big difference. Our consulting team provides you these inputs professionally, so you know it all."/>

            <Image_left image = {image3} image_heading = "Tax, compliance and accounting matters that could affect your business are good to know in advance" image_about = "Whatever strategy you adopt to enter the Indian markets & operate here, a prior and deeper insight into applicable direct & indirect tax regime, compliance, accounting & audit framework will come in handy and set you up for what to expect. It is better to avoid any unpleasant surprises due to not knowing in advance."/>

            <Image_right image = {image4} image_heading = "Prior knowledge of India's economic, industry and business landscape make you feel confident" image_about = "Knowledge about India’s GDP and growth estimates and indicators, economic landscape, sector and industry analysis, domestic trade & other relevant policies that could affect your business prospects, market reports etc can give you a heads up and competitive advantage to confidently plan your business venture in India"/>

            <Image_left image = {image5} image_heading = "India's political, cultural and social demography may have an impact on how you do business here" image_about = "Learn and know about India’s political landscape and Government initiatives, demographics, unique and distinct culture & ethos of the Indian diaspora, India’s diverse religion, caste and community co-existence, access to employable talent pool, work ethics, work culture & work regulations"/>

            <Image_right image = {image6} image_heading = "India Subsidiary OR India PEO?" image_about = {<fragment>
                Global companies that have ventured into India and have set up their back offices, support functions, engineering arms, research & development offices, captive centre, offshore entities, branch offices etc., are reaping huge benefits. As global expansion becomes increasingly necessary for companies to stay competitive, various methods for international growth have emerged. We are happy to present & discuss the two most popular methods –<strong> India Subsidiary Vs India PEO</strong>
            </fragment>}/>
        </div>
        {/* Blue Card Section */}
        <div className="my-5 py-3">
            <div className="d-flex justify-content-center india-entry-strat-blue-cards" >
                <div className="container-1200">
                    <div className="row g-0">
                        <motion.div className="col-md-6 blue-card-left px-5" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                            <h4 className="text-white text-center blue-card-h4 pb-4">India Subsidiary</h4>
                            <div className="text-white blue-card-about">
                                Traditionally, global expansion meant setting up Joint Ventures. Post liberalization in India in 1991, setting up an ‘India’ Subsidiary in the form of Private Limited Company became a new normal. An ‘India’ subsidiary is a duly formed legal entity in India that is controlled by the foreign parent company through ownership of between 51% to 100% of the equity share capital of the India subsidiary. The India subsidiary company works as per the laws of India and is considered as a domestic company for all purposes
                                <br/>
                                <br/>
                                An India Subsidiary works best for you if –
                                <br/>
                                <ol className="text-white m-0 ps-3">
                                    <li>You are committed to a country’s market long-term (say 3 + years),</li>
                                    <li>You are planning to hire a reasonably large headcount (say 25+),</li>
                                    <li>You have an extensive and committed long-term budget for India</li>
                                    <li>You want to avoid issues relating to permanent establishment</li>
                                </ol>
                                <br/>
                                <br/>
                                <Link href="/india_subsidiary" className="text-decoration-none text-white">
                                    <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i>
                                    &nbsp;Know more
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 blue-card-right  ps-5" initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
                            <h4 className="text-white text-center pb-4">India PEO</h4>
                            <div className="text-white blue-card-about">
                                Professional Employer Organisation (PEO) is fast emerging as the preferred option for several global entities. Topmost reasons being for its simplicity & flexibility. A professional employer organisation is a company that partners with small to medium-sized businesses on B2B basis to provide comprehensive HR services, such as payroll processing, benefits administration, regulatory compliance, tax filings, staff recruiting & training, & more; while the client continues to control its operations & employee functions.
                                <br/>
                                <br/>
                                An India PEO works best for you if –
                                <br/>
                                <ol className="text-white m-0 ps-3">
                                    <li>You are sure that you want to operate in India for upto 3 years only</li>
                                    <li>You are planning to hire a headcount of below 25-30 employees</li>
                                    <li>You have a fixed India budget and do not want to commit long terms funds</li>
                                    <li>You cannot delay your hiring and want to get started rapidly</li>
                                </ol>
                                <br/>
                                <br/>
                                <Link href="/india_peo_services" className="text-decoration-none text-white">
                                    <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i>
                                    &nbsp;Know more
                                </Link>
                                <br/>
                                <br/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        {/* Image Left*/}
        <div className="my-5 pb-4">
          <Image_left image = {image7} image_heading = "Is it possible to convert from one option to the other?" image_about = {<fragment>
            If there is a need, conversion from PEO model to subsidiary model is possible & is quite easy, simple and convenient. But conversion from subsidiary to PEO model is more difficult, cumbersome, time consuming & expensive, as the subsidiary, which is a legal formed entity would need to be wound up.
                                  <br/>
                                  <br/>
                                  Therefore, you need to clearly evaluate your choices based on your business objective in India, your long-term intent, your employee headcount plans, your budget, etc and make an informed decision.
          </fragment>}/>
        </div>
        <Footer/>
    </>
  )
}

export default india_entry_strategies
