import React from 'react'
import Image from 'next/image'
import logo from '@/assets/floraison-logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'


function Navbar() {
  return (
    <>
      <div className='sticky-top'>
            <div className="d-flex bg-white">
                <div className="nav-left d-flex align-content-center ">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="" className="nav-logo"/>
                        </Link>
                    </div>
                </div>
                <div className="nav-right bg-black d-flex align-content-center">
                    <button
                        type="button"
                        className="btn text-white p-0 shadow-none ms-4 nav-button"
                        data-bs-toggle="modal"
                        data-bs-target="#navModal"
                    >
                        Menu &nbsp;&nbsp;
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
        <div
     className="modal fade custom-modal"
     id="navModal"
     tabIndex={-1}
     aria-labelledby="navModalLabel"
     aria-hidden="true"
 >
     <div className="modal-dialog m-0 custom-modal-dialog" style = {{"paddingTop": "40px"}}>
         <div className="modal-content bg-black custom-modal">
             <div className="modal-body d-flex flex-column">
                 <button
                     type="button"
                     className="btn-close btn-close-white nav-button fa-2x"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                 ></button>
                 <Link href="/index" className="text-decoration-none text-white nav-modal-a-padding nav-hover active-navbar">Home</Link>
                 <Link href="/our-company" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Our Company</Link>
                 <Link href="/our-leadership" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Our Leadership</Link>
                 <Link href="/our-execution" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Our Execution</Link>
                 <Link href="/our-local-expertise" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Local Expertise</Link>
                 <Link href="/work-with-us" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Work With Us</Link>
                 <Link href="/resources-center" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Resources Center</Link>
                 <Link href="/contact-us" className="text-decoration-none text-white nav-modal-a-padding nav-hover">Contact Us</Link>
             </div>
         </div>
     </div>
 </div>
    </>
  )
}

export default Navbar
