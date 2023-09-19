import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import banner from '@/assets/work-with-us-banner.jpg'
import Image from 'next/image'
import Image_left from '@/components/Image_left'
import Image_right from '@/components/Image_right'
import Why_join_floraison_card from '@/components/Why_join_floraison_card'
import image1 from '@/assets/We-invite-you-to-be-part-of-our-success.jpg'
import image2 from '@/assets/Our-mission-for-our-employees-is-to-accelerate-their-growth-we-do-this-by.jpg'
import image3 from '@/assets/At-Floraison-our-culture-revolves-around-team-work-caring-and-sharing.jpg'
import image4 from '@/assets/Come-join-us.jpg'
import card_image1 from '@/assets/card-image.jpg'
import card_image2 from '@/assets/card-image.jpg'
import card_image3 from '@/assets/card-image.jpg'
import card_image4 from '@/assets/card-image.jpg'
import card_image5 from '@/assets/card-image.jpg'
import card_image6 from '@/assets/card-image.jpg'
import card_image7 from '@/assets/card-image.jpg'
import card_image8 from '@/assets/card-image.jpg'
import card_image9 from '@/assets/Business-unit-head–PEO.jpg'
import card_image10 from '@/assets/PEO-Executive.jpg'
import card_image11 from '@/assets/HR-Manager.jpg'
import card_image12 from '@/assets/HR-Executive–Talent-Acquisition.jpg'
import card_image13 from '@/assets/Manager-Finance-and-Accounts.jpg'
import card_image14 from '@/assets/Executive-Finance-and-Accounts.jpg'
import card_image15 from '@/assets/Lead-Payroll-and-HR.jpg'
import card_image16 from '@/assets/Internal-Audit-Executive.jpg'
import Footer from '@/components/Footer'
import Our_current_open_pos_card from '@/components/Our_current_open_pos_card'


function work_with_us() {
  return (
    <>
        <Head>
        <title>Work With Us - Floraison</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar/>
        <Herosection banner = {banner}/> 
        <div className="body">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-Image-heading m-0">Work with us</h2>
                <p className="box-Image-about">Alone we can do so little, together we can do so much.</p>
            </div>
            <Image_left image = {image1} image_heading = "We invite you to be part of our success" image_about = {<fragment>
                For over two decades, we’ve worked with several global companies from across the world, helping them set up and operate their subsidiaries in India. We have also worked with many local entrepreneurs, helping them set up their dream ventures and being part of their growth story. We could not have had this success without the holistic contributions by our committed and dedicated employees.
                                    <br/><br/>
                                    We invite you to join our robust and energetic team, as we together continue to deliver successful engagements to our global and domestic clients, creating value to them, and in the process, creating highly enriching experience and a great learning opportunity to our employees.
            </fragment>}/>

            <Image_right image = {image2} image_heading = "Our mission for our employees is to accelerate their growth: we do this by" image_about = {<fragment>
                Nurturing their professional aspirations and enabling career progression through increased responsibilities, greater rewards and enhanced prospects.
                                    <br/><br/>
                                    Fostering knowledge management through a range of practices to identify, acquire, utilize and distribute knowledge to result in confidence
                                    <br/>
                                    enhancement, creativity and innovation; Identify, coach and mentor talent and stimulate higher levels of performance.
                                    <br/><br/>
                                    Cultivating a vibrant & energetic culture to identify and groom leaders and inspire leadership abilities beyond the confines of hierarchies; 
            </fragment>} />

            <Image_left image = {image3} image_heading = "At Floraison, our culture revolves around team work, caring & sharing." image_about = "Unhesitatingly, we are happy to state that we are a small but a high performing and effective delivery team. We have created an atmosphere of mutual trust and belief. We follow an open door policy where seniors and juniors work in complete co-hesion, unity & bonhomie. We encourage each other to celebrate every success and introspect every failure. Our doors are strictly closed for office politics. We follow minimal policies & procedures and encourage self-governance" />

            <Image_right image = {image4} image_heading = "Come, join us" image_about = "While the world knows us as a high quality strategic and business consulting firm with relentless focus on clients and client deliverables, we think of ourselves as something more. Our Indian roots have stuck with us: We have our faith in working hard, being real, feeling proud, but staying humble. It is our endeavour to create a profitable but happy organisation for all our stakeholders. If this sounds good to you—then we hope you’ll join us. We’re looking for people to join the team who are as excited as we are." />

        </div> 
        {/* Why Join Floraison Section */}
        <div className="my-5 pt-4">
            <div className="cards-h4 text-center my-4">Why Join Floraison?</div>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row mb-3">
                        <div className="col-md-6 hidden-up-down">
                            <Why_join_floraison_card image = {card_image1} card_heading = "Enriched Professional Experience" card_about = "All our engagements with global or domestic clients provide you with high quality professional experience. You work alongside professionals and learn while you deliver your services on these live engagements, providing you unlimited enriched experience and expertise "/>
                        </div>
                        <div className="col-md-6 hidden-down-up">
                            <Why_join_floraison_card image = {card_image2} card_heading = "Opportunity to become a 'leader'" card_about = "Participate in our ‘Lead upfront’ program and be eligible to be a leader. Avail opportunities to explore your inherent talents, showcase your best skills and unravel your true potential & abilities as a ‘leader’. We will ensure that your age, sex, position, designation or experience does not restrict you"/>
                            
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 hidden-up-down">
                            <Why_join_floraison_card image = {card_image3} card_heading = "Unleash the Consultant in you" card_about = "We have resolved to adopt a consultative approach for every engagement we carry out. This means when you work alongside other team members, you get to wear a consultants hat and hone your skills while unleashing the consultant skills in you. Just the perfect way for you to go on to be a consultant."/>
                            
                        </div>
                        <div className="col-md-6 hidden-down-up">
                            <Why_join_floraison_card image = {card_image4} card_heading = "Knowledge Fostering" card_about = "Participate in our weekly knowledge fostering program where you will consistently learn and enhance your knowledge on latest professional topics. Participate in our ‘INFLO’ program where you can write on professional topics and be eligible to earn substantial incentives."/>
                            
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 hidden-up-down">
                            <Why_join_floraison_card image = {card_image5} card_heading = "Royalty League Program" card_about = "Floraison invites employees to refer clients and participate in the growth of the firm. In turn, we reward you with royalty income arising from such referrals. Simply refer clients and earn more. Royalty income is calculated at pre-determined percentage of the revenues earned from the client."/>
                            
                        </div>
                        <div className="col-md-6 hidden-down-up">
                            <Why_join_floraison_card image = {card_image6} card_heading = "Tag Your Pal Program" card_about = "We are a growing company and to service new clients, we are always seeking to employ energetic and competent individuals. Just keep an eye on open positions in the organsiation and refer your friends or acquaintances to join us and be eligible to earn referral fee, upon their joining."/>
                            
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 hidden-up-down">
                            <Why_join_floraison_card image = {card_image7} card_heading = "Rapid Career Progression" card_about = "At Floraison, we constantly encourage you to take up higher education and professional courses which will help you acquire higher academic qualifications alongside real practical experience and expertise which you will acquire during your service to clients while working on live engagements."/>
                            
                        </div>
                        <div className="col-md-6 hidden-down-up">
                            <Why_join_floraison_card image = {card_image8} card_heading = "Collaborative Workspace" card_about = "We are situated at Jayanagar, at a central location easily accessible from all parts of Bangalore. We have created a great office with modern facilities & amenities which will make you look forward to come to office, each morning. Enjoy open, collaborative work environments so you can do your best work."/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Current Open Position Starts */}
        <section className="my-5 py-4">
            <div className="cards-h4 text-center py-2">Our Current Open Positions</div>
            <p className="cards-p text-center mb-5">If you think you are suitable for the below positions, please write to us with a copy of your latest CV at 
                <a href="" className="text-decoration-none"> HR@floraison.in</a></p>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_1" image = {card_image9} image_class = "current-open-pos-card-img-1"  object_position = "84% 0px" card_heading = "Business unit head – PEO" card_about = {<fragment>
                                Experienced professional with key responsibility to develop business and operate model for PEO – recruitment and staffing. Set up and be the head of the new business unit (BU) independently. <br/>
                                        Strategically plan & deliver the overall BU objectives, while ensuring they are on target with management goals and directives. Responsible for driving the business development effort in accordance with the company strategy and budget. Experience in reputed staffing consulting company would be essential.
                            </fragment>}/>
                        </div>
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_1" image = {card_image10} image_class = "current-open-pos-card-img-1" object_position = "33% 0px" card_heading = "PEO Executive" card_about = "Experienced professional with hands-on experience in payroll processing in greytHR, labour compliances, onboarding & offboarding activities. Experience in reputed staffing or payroll consulting company would be essential."/>                            
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_2" image = {card_image11} image_class = "current-open-pos-card-img-2" object_position = "62% 0px" card_heading = "HR Manager" card_about = "Experienced professional with hands-on experience on key processes such as recruitment, employee onboarding and offboarding, employee engagements, policy initiatives, change management initiatives, talent nurturing initiatives, performance planning and implementation. Experience in mid-sized reputed staffing or service-based company would be essential."/>                            
                        </div>
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_2" image = {card_image12}  image_class = "current-open-pos-card-img-2" object_position = "62% 0px" card_heading = "HR Executive – Talent Acquisition" card_about = "Experienced professional with hands-on experience on end-end recruitment, employee onboarding and offboarding & employee engagements. Experience in mid-sized reputed staffing or recruitment company would be essential."/>               
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_3" image = {card_image13} image_class = "current-open-pos-card-img-3" object_position = "33% 0px" card_heading = "Manager Finance & Accounts" card_about = "Qualified chartered accountant with around 2 years of post-qualification experience in effectively leading engagements in accounting & bookkeeping, direct & indirect tax for corporate clients. Experience in reputed mid-sized accounting firms or consulting company would be considered relevant."/>                             
                        </div>
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_3" image = {card_image14} image_class = "current-open-pos-card-img-3" object_position = "38% 0px" card_heading = "Executive Finance & Accounts" card_about = "Semi qualified chartered accountant with around 3+ years of experience or commerce graduate with 5+ years of experience in effectively leading engagements in accounting & bookkeeping, direct & indirect tax for corporate clients. Experience in reputed mid-sized accounting firms or consulting company would be considered relevant. Articleship completed candidates with preference for accounting & bookkeeping would also be considered."/>                                                        
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_3" image = {card_image15} image_class = "current-open-pos-card-img-3" object_position = "19% 0px" card_heading = "Lead - Payroll & HR" card_about = "Experienced professional with experienced of managing client servicing activities related to end-to-end processing of error free payroll, employee benefits, employee reimbursement, employee tax planning and implementation, withholding tax management, setting up employee help desk and resolving employee queries, handling labour compliances – Profession Tax, Provident Fund and ESI matters."/>                                                       
                        </div>
                        <div className="col-md-6">
                            <Our_current_open_pos_card card_class = "custom-card-body_3" image = {card_image16} image_class = "current-open-pos-card-img-3" object_position = "60% 0px" card_heading = "Internal Audit Executive" card_about = "Execute activities related to internal audit, management audit, assurance services, due diligence, and limited reviews. Independent review of books of accounts, review of closing books of accounts each month, reconciling and managing accounts payable, accounts receivable, Interco and other accounts prepare & finalize monthly financial statements and other MIS reports, present the same to clients and participate in discussions and calls."/>                  
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default work_with_us
