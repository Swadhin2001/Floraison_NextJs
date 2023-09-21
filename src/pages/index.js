import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import banner from '@/assets/home-banner.jpg'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import image1 from '@/assets/If-you-arent-doing-business-in-India-its-time-to-re-think.jpg'
import image2 from '@/assets/Your-journey-into-India-starts-by-choosing-the-right-partner.jpg'
import image3 from '@/assets/Finding-perfect-growth-story-for-our-global-and-domestic-clients.jpg'
import image4 from '@/assets/Benefit-from-our-visionary-leadership-and-astute-planning.jpg'
import image5 from '@/assets/Each-engagement-is-managed-by-single-point-of-contact.jpg'
import image6 from '@/assets/Our-unmatched-experience-and-local-expertise-will-guide-you-throughout.jpg'
import Footer from '@/components/Footer'
import Home_card from '@/components/Home_card'
import card_image1 from '@/assets/India Entry-Strategies.jpg'
import card_image2 from '@/assets/India-Subsidiary.jpg'
import card_image3 from '@/assets/Subsidiary-Support.jpg'
import card_image4 from '@/assets/India-PEO-Services.jpg'
import card_image5 from '@/assets/Small-Business-Support.jpg'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Home_slider from '@/components/Home_slider'
import Home_slider_new from '@/components/Home_slider_new'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Herosection banner={banner} />
      {/* Body Scetion */}
      <section className="body">
        <div className="text-center mb-5 ">
          <h2 className="box-img-heading m-0 ">Your Gateway to India</h2>
          <p className="box-img-about">Expand your global business and enter the Indian markets NOW!</p>
        </div>
        <Image_right image_heading="If you aren’t doing business in India, it’s time to re-think!" image_about="Enter the Indian markets NOW. India’s journey on the path of economic reforms has transformed it to one of the world’s fastest growing economies. Its large, young & growing population is its best asset. Sectors like IT and ITES, Retail, Ecommerce, Manufacturing, Pharma and Healthcare, R&D and so many other sectors are projected to provide serious growth opportunities to global and Indian companies who are doing business in India." image={image1} object_position="object-pos-right" />
        <Image_left image_heading="Your journey into India starts by choosing the right partner" image_about="Your journey into India, of course, starts with engaging and supported by the right partner – who has the capability and resolve to guide you throughout. The choice of a strategic consulting firm offering holistic professional services, can make a huge difference to the business of a global organization. Increasingly, more than ever before, global organizations need to carefully engage local firms that have expertise of handling global companies and managing their growth, with a proactive consulting approach, which would mitigate all possible risks." image={image2} />
      </section>
      {/* Explore our service suite */}
      <div className="my-5">
        <motion.div className="text-center" initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
          <h4 className="cards-h4">Explore our Service Suite</h4>
          <p className="cards-p">
            Share your plans with us and help us customise a workable strategy for your effective entry into India.
            <br />
            Go beyond your current needs and experience our holistic range of services tailored for you
          </p>
        </motion.div>
        <div className="d-flex justify-content-center p-0 my-5 ">
          <div className="container-900">
            <div className="row ">
              <div className="col-md-4">
                <Home_card card_image={card_image1} card_heading="India Entry Strategies" card_about="It’s our mission to promote and formulate the entry of global organizations into the Indian markets through well thought out & structured strategies which include India Subsidiary & India PEO options" />
              </div>
              <div className="col-md-4">
                <Home_card card_image={card_image2} card_heading="India Subsidiary" card_about="Setting up & operating your own India subsidiary is a great way to access India on permanent long-term basis. India subsidiary has been considered by several global companies operating in India" />
              </div>
              <div className="col-md-4">
                <Home_card card_image={card_image3} card_heading="Subsidiary Support" card_about="While you handle your core business, our professionals from bookkeeping, tax, compliance, payroll, HR & business support teams will deliver ongoing support services, each month under a professional engagement" />
              </div>
            </div>
            <div className="d-flex justify-content-center my-4">
              <div className="container-624">
                <div className="row">
                  <div className="col-md-6">
                    <Home_card card_image={card_image4} card_heading="India PEO Services" card_about="Simplify your global expansion plan and commence hiring your talent in India without the need to form your legal entity. Engage our PEO services & get access to employees who you’ve always wanted to work with" />
                  </div>
                  <div className="col-md-6">
                    <Home_card card_image={card_image5} card_heading="Small Business Support" card_about="We aspire to cultivate the spirit of entrepreneurship among potential domestic entrepreneurs & to help them start their dream venture & support them to stabilize & grow their business and achieve success" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image Left Right Section */}
      <div className="my-5 pb-5">
        <Image_left image={image3} image_heading="Finding perfect growth story for our global and domestic clients" image_about={<fragment>
          Floraison is a strategic and business consulting company founded in 2002 and is based out of Bangalore, India. Since our inception, we have helped more than 300 global companies to create successful businesses in India under our India Entry Strategies and have nurtured the aspirations of more than 200 domestic entrepreneurs with our Small Business Support. <br /><br /><Link href="/our-company" className="text-decoration-none text-black">
            <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i> &nbsp;
            Know more about us
          </Link>
        </fragment>} />
        <Image_right image={image4} image_heading="Benefit from our visionary leadership and astute planning" image_about={<fragment>
          We share a common vision to constantly influence, lead & simplify the way our global & domestic clients  setup and do their business in India. For us, every client engagement is unique and needs careful & smart planning. We lead every engagement with a sense of purpose, responsibility and ownership, to help you achieve your objectives and goals.
                                <br/>
                                <br/>
                                <Link href="/our-leadership" className="text-decoration-none text-black">
                                    <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i> &nbsp;
                                    Meet our leadership team
                                </Link>
        </fragment>} />
        <Image_left image={image5} image_heading="Each engagement is managed by single point of contact " image_about={<fragment>
          We have dedicated in-house experts in each of our service offering and they all work together in focussed groups. We always start by analysing a client engagement from several points of view. This multidisciplinary approach is a major benefit for our clients as they get the best of expertise & experience. A customised team is created for large or complex engagement and this team is led by a single point of contact.
                                <br/>
                                <br/>
                                <Link href="/our-execution" className="text-decoration-none text-black">
                                    <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i> &nbsp;
                                    See how we do this
                                </Link>
        </fragment>} />
        <Image_right image={image6} image_heading="Our unmatched experience and local expertise will guide you throughout" image_about={<fragment>
          India is a diverse country and to many it represents a sub-continent – many nations rolled into one! Our several man years of combined local experience and expertise will help you navigate through various complex situations and put you on the definite path of success in the Indian market.
                                <br/>
                                <br/>
                                <Link href="/our-local-expertise" className="text-decoration-none text-black">
                                    <i className="fa fa-angle-double-right color-black" aria-hidden="true"></i> &nbsp;
                                    Learn how this benefits you
                                </Link>
        </fragment>} />
      </div>
          {/* Horizontal Slide Section */}
          <div className="mb-5 pb-5">
            <h4 className="text-center horizontal-slide-h4 m-0 pb-5">Download our ePublications</h4>
            <div className='custom-carousel-item'>
               <Home_slider/>
               {/* <Home_slider_new/> */}
            </div>
          </div>
      <Footer />
    </>
  )
}
