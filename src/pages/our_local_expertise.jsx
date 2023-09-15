import Herosection from '@/components/Herosection'
import React from 'react'
import Navbar from '@/components/Navbar'
import banner from '@/assets/local-expertise-banner.jpg'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import Footer from '@/components/Footer'
import image1 from '@/assets/Every-country-is-unique-and-distinct-and-so-are-the-challenges.jpg'
import image2 from '@/assets/A-locally-experienced-expert-matters-and-can-make-that-big-difference.jpg'
import image3 from '@/assets/Gain-from-our-deep-understanding-of-home-conditions-in-India.jpg'
import image4 from '@/assets/There-is-a-local-way-of-doing-things.jpg'
import image5 from '@/assets/Local-familiarity-feel-knowledge-expertise-and-experience-is-simply-a-must-have.jpg'

function our_local_expertise() {
  return (
    <>
    <Navbar/>
      <Herosection banner = {banner}/>
      {/* Body Scetion */}
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">Our Local Expertise</h2>
                <p className="box-img-about">Global companies can leverage on our local expertise & experience & benefit immensely</p>
            </div>
            <Image_right image = {image1} image_heading = "Every country is unique and distinct and so are the challenges" image_about = "Familiarity with local conditions and situations is a great advantage, and at times a necessity, to navigate through complex circumstances a business could face in India. Our people are focused on the challenges faced by global multinationals operating in India.  We work across multiple disciplines, combining global experience with local expertise to help our clients meet the challenges of the modern business environment in India"/>

            <Image_left image = {image2} image_heading = "A 'locally' experienced expert matters and can make that big difference" image_about = "Setting up and operating an enterprise in a country, adhering to its compliances, adopting diverse culture, dealing with native beings and running a local business efficiently requires a mentor & expert who has an insight into local business environment and the ability to handhold the business not only through the initial phases but also through its growth cycle."/>

            <Image_right image = {image3} image_heading = "Gain from our deep understanding of ‘home conditions’ in India." image_about = "For more than twenty years, we have accumulated our local expertise, knowledge and experience very carefully and are happy to share then with you for your success and growth. We value our relationship with you and want the very best for you."/>

            <Image_left image = {image4} image_heading = "There is a 'local way' of doing things!" image_about = "A given issue may be the first time you have encountered it in India, and it may look complicated to resolve. But be assured, there is a high chance that we may have faced the situation several times and know precisely how to handle it, the local way."/>

            <Image_right image = {image5} image_heading = "Local familiarity, feel, knowledge, expertise and experience is simply a must have" image_about = "Each country has its uniqueness and India is no different. It merely takes a local expert with the familiarity, feel, knowledge and experience to help you understand and navigate you out of any given situation, making you comfortable and stressfree!"/>
        </div>
        <Footer/>
    </>
  )
}

export default our_local_expertise
