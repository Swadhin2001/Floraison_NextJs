import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

function Resources_card(props) {
  return (
    <>
        <div className="d-flex e-brocure-card">
            <div className="text-center resources-card">
                <h4 className="card-body-h4 mt-4 mb-0">{props.card_heading}</h4>
                <p className="resources-card-p">{props.card_about1}</p>
                <p className="card-body-p">{props.card_about2}</p>
                <button
                    type="button"
                    className="btn resources-a shadow-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                <div className="resources-a">
                    <i className="fa fa-download" aria-hidden="true"></i> Get an eCopy
                </div>
                </button>
            </div>
            <Image src={props.image} alt="" className="e-brochures-img"/>
        </div>

        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered justify-content-center">
                <div className="modal-content mx-auto rounded-0  modal-form-body ">
                    <div className="modal-body">
                        <div className="modal-header">
                            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                        <form className="form-padding">
                            <h1 className="form-heading text-center">Download the eCopy</h1>
                            <p className="form-heading-about text-center pb-3">Help us send the eCopy to your email</p>
                              <div className="mb-3">
                                <input type="text" id="disabledTextInput" className="form-control shadow-none rounded-0 form-input" placeholder="Name" required/>
                              </div>
                              <div className="mb-3">
                                <input type="text" id="disabledTextInput" className="form-control shadow-none rounded-0 form-input" placeholder="Email" required/>
                              </div>
                              <p className="form-p pb-2">We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from Floraison. You can unsubscribe at any time. For details, view our 
                                <a href="./privacy-policy.html" className="text-decoration-none"> Privacy Policy</a>
                                .</p>
                              <button type="submit" className="btn btn-dark send-btn rounded-0">Send</button>
                          </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resources_card
