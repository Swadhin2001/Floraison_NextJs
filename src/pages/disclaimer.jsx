import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head'
import {motion} from 'framer-motion'

function Disclaimer() {
  return (
    <>
    <Head>
      <title>Disclaimer - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar/>
      <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1 }}>
        <div className="d-flex justify-content-center hidden-up-down">
            <div className="container-1140 my-5 disclaimer-padding">
                <h2 className="pb-4 privacy-pol-h2">Disclaimer</h2>
                <div>
                    <h4 className="pb-2 privacy-pol-h4">No Rendering of Advice</h4>
                    <p className="pb-2 privacy-pol-p">The information contained within this website is provided for informational purposes only and is not intended to substitute for obtaining strategic, business, accounting, tax, compliace, HR, or financial advice from strategic or business consultants.
                        <br/> <br/>
                        Presentation of the information via the Internet is not intended to create, and receipt does not constitute, an accountant-client relationship. Internet subscribers, users and online readers are advised not to act upon this information without seeking the service of a strategic or business consultant.
                    </p>

                    <h4 className="pb-2 privacy-pol-h4">Accuracy of Information</h4>
                    <p className="pb-2 privacy-pol-p">While we use reasonable efforts to furnish accurate and up-to-date information, we do not warrant that any information contained in or made available through this website is accurate, complete, reliable, current or error-free.
                        <br/> <br/>
                        We assume no liability or responsibility for any errors or omissions in the content of this website or such other materials or communications. If you wish to contact the webmaster of this website, please write to the contact details provided in the Contact Us page.
                    </p>

                    <h4 className="pb-2 privacy-pol-h4">Disclaimer of Warranties and Limitations of Liability</h4>
                    <p className="pb-2 privacy-pol-p">This website is provided on an “as is” and “as available” basis. Use of this website is at your own risk. We and our suppliers disclaim all warranties. Neither we nor our suppliers shall be liable for any damages of any kind with the use of this website.</p>
                    
                    <h4 className="pb-2 privacy-pol-h4">Links to Third Party Websites</h4>
                    <p className="pb-2 privacy-pol-p">For your convenience, this website may contain hyperlinks to websites and servers maintained by third parties. We do not control, evaluate, endorse or guarantee content found in those sites. We do not assume any responsibility or liability for the actions, products, services and content of these sites or the parties that operate them. Your use of such sites is entirely at your own risk.</p>
                </div>
            </div>
        </div>
    </motion.div>
    <Footer/>
    </>
  )
}

export default Disclaimer
