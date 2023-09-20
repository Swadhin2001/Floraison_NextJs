import React from 'react'
import Link from 'next/link'

function Upper_footer() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center upper-footer hidden-down-up ">
        <div className="upper-footer-overlay">
            <h2 className="text-white upper-footer-h2 pb-2">Ready to get started?</h2>
            <h4 className="text-white pb-3 upper-footer-h4">
                start@floraison.in
            </h4>
            <Link href="/contact-us">
                <button className="footer-button">Contact Us</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Upper_footer
