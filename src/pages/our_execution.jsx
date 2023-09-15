import React from 'react'
import Navbar from '@/components/Navbar'
import Herosection from '@/components/Herosection'
import banner from '@/assets/our-execution-header-banner.jpg'
import Image_right from '@/components/Image_right'
import Image_left from '@/components/Image_left'
import image1 from '@/assets/Our-people-and-the-strength-they-bring-to-support-are-the-true-reasons-for-our-success.jpg'
import image2 from '@/assets/Pride-passion-and-flair-define-our-execution-team.jpg'
import image3 from '@/assets/Collaborating-to-deliver-excellence.jpg'
import image4 from '@/assets/Right-attitude-and-flexible-consultative-approach-is-our-USP.jpg'
import image5 from '@/assets/Personalised-support-and-realistic-expectation.jpg'
import Footer from '@/components/Footer'

function our_execution() {
  return (
    <div>
      <Navbar/>
      <Herosection banner={banner} />
      <section className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">Our Premium Execution</h2>
                <p className="box-img-about">Our people and the strength they bring to support, are the true reasons for our success</p>
            </div>
            <Image_right image = {image1} image_heading = "Our people and the strength they bring to support, are the true reasons for our success" image_about ="Our execution team is hardworking, energetic, committed, highly understanding and dedicated towards client engagements. They understand that mere planning and strategising, without confident execution means nothing and thats why they put in their best support in every engagement, to make things happen on the ground, making our clients and us look good."/>

            <Image_left image = {image2} image_heading = "Pride, passion and flair define our execution team" image_about ="Now, more than ever before, we need talented people from diverse backgrounds to understand and help our clients navigate the complexities of this transformative and disruptive age – People who can ensure rapid response to client needs, a committed level of expertise, experience, and abilities for managing client relationships, through sheer pride, passion and flair. Our execution team demonstrates these virtues to the fullest."/>

            <Image_right image = {image3} image_heading = "Collaborating to deliver excellence" image_about ="Our delivery team comprises a good proportion and mix of qualified and hard working Chartered Accountants, Company Secretaries, Lawyers, Accountants, Management Grads, HR Professionals, Strategic and Business Consultants and others, who steadfastly believe in collaborating and delivering excellence in all client engagements."/>

            <Image_left image = {image4} image_heading = "Right attitude and flexible consultative approach is our USP" image_about ="Our organisation is flat, nimble, and agile, and we respond fast!! We are extremely confident that we simply have the right people with the right competencies AND the right attitude. We carefully choose our people to make sure that we keep our unique spirit and culture alive. We create value to our clients through our flexible consultative approach."/>
            
            <Image_right image = {image5} image_heading = "Personalised support and realistic expectation" image_about ="We provide personalised support to clients,  often going out of our way when there is a need and delivering value adds wherever we can so that you benefit from our engagement. We set realistic expectations with our clients and believe in being brutally honest with them, if we must. To us, our focus has always been our client success."/>

        </section>
        <Footer/>
    </div>
  )
}

export default our_execution
