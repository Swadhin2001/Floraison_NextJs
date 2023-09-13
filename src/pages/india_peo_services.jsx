import Herosection from '@/components/Herosection'
import Image_right from '@/components/Image_right'
import India_peo_big_card from '@/components/India_peo_big_card';
import India_peo_small_cards from '@/components/India_peo_small_cards';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import banner from '@/assets/india-peo-services-banner-new.jpg'
import image1 from '@/assets/Jump-start-your-India-business-through-our-India-PEO.jpg'
import image2 from '@/assets/PEO-simplifies-global-expansion-plan.jpg'
import image3 from '@/assets/Engage-the-best-talents-from-India-without-any-barriers.jpg'
import image4 from '@/assets/What-is-PEO.jpg'
import card_image from '@/assets/card-image.jpg'
import Image_left from '@/components/Image_left'
import Footer from '@/components/Footer';


function india_peo_services() {
  return (
    <>
        <Herosection banner = {banner}/>
        {/* Home Page Body */}
        <div className="my-5 pt-5 body-mobile">
            <div className="text-center mb-5 hidden-up-down">
                <h2 className="box-img-heading m-0">India PEO</h2>
                <p className="box-img-about">Engage the best talents from India, without any barriers</p>
            </div>
            <Image_right image = {image1} image_heading = "Jump-start your India business - through our India PEO" image_about = "Traditionally, for expanding their business into foreign territories, global companies needed to establish their own foreign legal entities in the form of wholly owned subsidiaries. This often proved to be time consuming, expensive, cumbersome and risky. To many, it appeared unnecessary and unmeaningful. With rapid evolution of PEO opportunities, global entities can now do business in a foreign location without having to set up subsidiaries."/>

            <Image_left image = {image2} image_heading = "PEO simplifies global expansion plan" image_about = "With PEO option gaining precedence over legal entity set up for lot of multinational companies, global expansion plans have been simplified significantly – saving lots of time, costs, hassles and above all risks. If you want to avail our PEO services, just reach out to us, tell us your needs, and allow us to get started. It’s as simple as that!"/>

            <Image_right image= {image3} image_heading= "Engage the best talents from India, without any barriers" image_about = "Setting up a legal presence and hiring new team members is undoubtedly an exciting time for growing businesses in India. With our PEO services, you can jump the phases of entity planning and entity formation under a complicated global expansion process and straight away avail services of the best talents India can offer to you."/>

            <Image_left image = {image4} image_heading = "What is PEO?" image_about = "A Professional Employer Organisation (PEO) is a company that partners with small to medium-sized businesses on B2B basis to provide comprehensive HR services, such as payroll processing, benefits administration, regulatory compliance, tax filings, staff recruiting & training, & more; while the client continues to control its operations & employee functions. PEO Services are also called Co-Employment Services or Resource Deployment Services"/>
        </div>

        {/* Small Cards Section */}
        <div className="my-5 pt-4">
            <div className="cards-h4 text-center my-4">Evaluate if PEO is the most suitable option <br/>
                for your India expansion plans!</div>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row hidden-down-up">
                        <div className="col-md-3">
                            <India_peo_small_cards card_heading = "Test water first before committing to expansion" card_about = "Do not make the cardinal sin of jumping into a foreign territory without knowing it well enough. With our India PEO, you can gain access to India, with no risks or commitments & begin to hire employees & get them to work for you exclusively without a legal entity"/>
                        </div>
                        <div className="col-md-3">
                            <India_peo_small_cards card_heading = "Make and know your expansion plans" card_about = "What are the reasons for your India expansion? Objectives? Duration? Manpower requirements? Budget? Can you afford to delay your hiring in India? Answers to these critical questions can help you evaluate if PEO is the best option to begin your global expansion to India"/>
                        </div>
                        <div className="col-md-3">
                            <India_peo_small_cards card_heading = "Manage India employees of an acquired company" card_about = "If you have acquired a company in your country or globally that has a legal presence and employees in India and you do not want to continue operating the legal entity in India for obvious reasons, signing up a PEO arrangement with us could be the best option for you"/>                        
                        </div>
                        <div className="col-md-3">
                            <India_peo_small_cards card_heading = "Get India presence without committing" card_about = "Having a PEO presence in India and having employees hired and working exclusively for you can give you great visibility for business connection in India. You can opt to convert to subsidiary when you are ready for full- fledged legal presence"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Big Cards Section */}
        <div className="my-5 pt-4">
            <div className="cards-h4 text-center my-4">If you were looking for one good reason to engage <br/> our unique PEO services, here are ten.</div>
            <div className="d-flex justify-content-center">
                <div className="container-1140">
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                            <India_peo_big_card image= {card_image} card_heading= "Quick Business Launch" card_about = "With our India PEO model, your global entity can commence business in India in practically NO time at all. This solution cuts the time it takes to enter and commence your business activities in India by nearly 90% when compared to creating a foreign legal entity, which could cost you significant time & efforts"/>
                        </div>
                        <div className="col-md-6">
                            <India_peo_big_card image= {card_image} card_heading= "Huge Cost Savings Upfront" card_about = "It is now possible to expand your business into offshore location without incurring any costs upfront! Our PEO model helps you start your business in India with no capital outlay. Entity formation on the other hand requires substantial capital to be set aside right in the beginning"/>
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Single Consolidated Invoice" card_about = "For all the services you receive under the agreed PEO Service engagement, you will receive just one consolidated invoice per month. This makes the whole arrangement simple, transparent, clear, and predictable. There will be no surprise invoices, no hidden costs"/>
                        </div>
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Predictable Ongoing Costs" card_about = "All costs are pre-agreed & well determined. Direct costs of hiring, compensating, & retaining employees are clearly budgeted & agreed. Indirect costs such as establishment costs, overheads are factored in the costs. There are no surprises or unforeseen expenses"/>
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Be Handsfree" card_about = "You don’t have to deal with administrative or regulatory burdens that can be overwhelming & time consuming. No hassles of dealing with multiple vendors, service providers & suppliers We manage these cumbersome processes for you while you only focus on managing the employees & their deliverables"/>                            
                        </div>
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Total Risk Mitigation" card_about = "Zero legal or compliance burden as risks of doing business in India are completely mitigated. By engaging us, you are leveraging on our experience and expertise with local  laws, culture and business conditions and minimising your exposure towards employees, and your business in India"/>                            
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Flexible Scaling" card_about = "Hire as many employees as you need. Free up those you don’t need. Just spell out your needs and we will arrange to implement them. Flexible scaling up or scaling down option is amongst the most preferred reasons why global entities prefer the PEO model"/>   
                        </div>
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "One Stop HR Solutions" card_about = "Enjoy one stop HR solutions from professionals – managed labour compliance, hiring, joining, onboarding, exits, payroll & employee benefits. Our local HR experts know applicable laws, regulations, best practices & standard operating procedures. You can leverage on this knowledge & significantly benefit"/>                              
                        </div>
                    </div>
                    <div className="row mb-3 hidden-down-up">
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Easy Exit Option" card_about = "Our PEO engagement typically has 60 day exit clause. That means by merely providing 60 days’ notice, you can exit from this PEO arrangement. No strings attached. No minimum lock-in period, No minimum commitments. This is a great option especially when you are looking to ‘test waters’ in India"/>     
                        </div>
                        <div className="col-md-6">
                        <India_peo_big_card image= {card_image} card_heading= "Flexible Conversion to Subsidiary" card_about = "Our PEO arrangement has flexible option to convert PEO engagement into subsidiary, with flexible & competitive pricing, for your benefit. We encourage you to explore legal entity option after you have tested waters in the country & fairly feel confident that you want a permanent structure in India"/>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default india_peo_services
