import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import {motion} from 'framer-motion'

function Lower_footer() {
  return (
    <div>
      <div className="bg-black lower-footer ">
            <div className="container-1200">
                <div className="row p-4 hidden-down-up">
                    <motion.div className="col-md-4 text-white mx-4 px-4 " initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
                        <h4 className="text-white footer-h4 pb-2">Contact Us</h4>
                        <p className="text-white footer-links">
                            <strong>Floraison India Strategic Consulting Pvt Ltd</strong>
                            <br />
                            185/7, 2nd Floor, Chandra Plaza
                            <br />
                            8th F Main Road, 26th Cross
                            <br />
                            Chandra Plaza, Jayanagar 3rd Block
                            <br />
                            Bangalore – 560011, Karnataka, India
                            <br />
                            Phone: 91-80-26538257
                            <br />
                            Email: start@floraison.in
                        </p>
                    </motion.div>
                    <motion.div className="col-md-2 text-white mx-4 px-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
                        <h4 className="text-white footer-h4 pb-2">Our Services</h4>
                        <div className="d-flex flex-column footer-links">
                            <Link href="/india_entry_strategies" className="text-decoration-none text-white py-1">India Entry Strategies</Link>
                            <Link href="/india_subsidiary" className="text-decoration-none text-white py-1">India Subsidiary</Link>
                            <Link href="/subsidiary_support" className="text-decoration-none text-white py-1">Subsidiary Support</Link>
                            <Link href="/india_peo_services" className="text-decoration-none text-white py-1">India PEO Services</Link>
                            <Link href="/small_business_support" className="text-decoration-none text-white py-1">Small Business Support</Link>
                        </div>
                    </motion.div>
                    <motion.div className="col-md-2 text-white mx-4 px-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
                        <h4 className="text-white footer-h4 pb-2">About Us</h4>
                        <div className="d-flex flex-column footer-links">
                            <Link href="/our_company" className="text-decoration-none text-white py-1">Our Company</Link>
                            <Link href="/our_leadership" className="text-decoration-none text-white py-1">Our Leadership</Link>
                            <Link href="/our_execution" className="text-decoration-none text-white py-1">Our Execution</Link>
                            <Link href="/our_local_expertise" className="text-decoration-none text-white py-1">Local Expertise</Link>
                            <Link href="/work_with_us" className="text-decoration-none text-white py-1">Work With Us</Link>
                        </div>
                    </motion.div>
                    <motion.div className="col-md-2 text-white mx-4 px-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
                        <h4 className="text-white footer-h4 pb-2">Others</h4>
                        <div className="d-flex flex-column footer-links">
                            <Link href="/resources_center" className="text-decoration-none text-white py-1">Resource Center</Link>
                            <Link href="/contact_us" className="text-decoration-none text-white py-1">Contact Us</Link>
                            <Link href="/policy" className="text-decoration-none text-white py-1">Privacy Policy</Link>
                            <Link href="/disclaimer" className="text-decoration-none text-white py-1">Disclaimer</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
            <p className="text-white mx-4 px-4 footer-links my-0 py-0">Copyright (c) 2023 Floraison India Strategic Consulting Pvt Ltd, Bangalore, India. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Lower_footer
