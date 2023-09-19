import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import banner from "@/assets/our-company-banner.jpg"
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import image1 from '@/assets/Great-endeavours-often-have-humble-beginnings.jpg'
import image2 from '@/assets/We-are-an-agile-and-sharply-focussed-company.jpg'
import image3 from '@/assets/Open-communication-and-transparency-are-our-key-differentiators.jpg'
import image4 from '@/assets/Integrated-service-model-with-flexible-pricing.jpg'
import image5 from '@/assets/Touching-lives-of-several-of-our-employees.jpg'
import Footer from '@/components/Footer'
import Our_clientele_slider from '@/components/Our_clientele_slider'

function our_company() {
  useEffect (()=>{
    document.title = "Our Company - Floraison"
  },[]);
  return (
    <>
      <Navbar/>
      <Herosection banner = {banner}/>
      {/* Body Section */}
      <div className="our-company-body body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">About Floraison India</h2>
                <p className="box-img-about">Accelerating growth for our clients and employees is what drives us</p>
            </div>

            <Image_right image = {image1} image_heading = "Great endeavours often have humble beginnings" image_about = "Floraison is a closely held company, headquartered at Bangalore, India. Founded way back in 2002 by couple Prakash Kamath & Geetha Kamath, the company commenced with a humble beginning. The company is privately and self funded. Since its inception two decades ago, the company has come a long way & has created a niche for itself by pioneering integrated services to global and domestic entrepreneurs. Floraison in french means ‘flowering’ or ‘accelerating growth’"/>

            <Image_left image = {image2} image_heading = "We are an agile and sharply focussed company" image_about = "Our aim has always been to create an agile organisation, focusing sharply and clearly on the goals & objectives. We have been highly successful in creating an organisation that is large enough to utilise diverse talents, skills, knowledge & expertise of several individuals and yet small enough not to be lost in bureaucracy & hierarchies"/>

            <Image_right image = {image3} image_heading = "Open communication and transparency are our key differentiators" image_about = "Our crisp & clear communication, candid & honest approach and transparent actions are highly appreciated by our clients making us ever so dependable, reliable & above all – trustable. Our Single Point of Contact co-ordinates & gets thing done internally from various teams saving you time, efforts & unnecessary follow-ups. We are organised and disciplined resulting in high efficiency and productivity."/>

            <Image_left image = {image4} image_heading = "Integrated service model with flexible pricing" image_about = {<fragment>
              Our service delivery model offers comprehensive professional services under one roof, seamlessly; our range and variety of services ensure that our clients receive all they need from one source.
                                    <br/>
                                    <br/>
                                    Our fee policies are based on expected professional standards for pre-agreed deliverables, value, as perceived by clients and strictly no hidden costs, no surprises policy. Our clients respect us for our transparency
            </fragment>}/>

            <Image_right image = {image5} image_heading = "Touching lives of several of our employees" image_about = "We have touched the lives of several employees who have worked with us over the years, by nurturing professional aspirations, knowledge fostering & enabling their career progression. We have always aspired to create a ‘Happy’ organisation for our employees. This gives us a sense of fulfilment & great satisfaction."/>
      </div>
      
      {/* Our Clientele Section */}
      <div className="mb-5 py-4">
          <h4 className="text-center horizontal-slide-h4 m-0">Our Clientele</h4>
          <div className="d-flex justify-content-center mb-4">
            <Our_clientele_slider/>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default our_company
