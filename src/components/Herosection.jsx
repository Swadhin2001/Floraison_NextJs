import React from 'react'

function Herosection(props) {
  return (
    <div>
      <div className={`home-banner index-herosection-banner ${props.banner_class}`} style = {{"backgroundImage" : `url(${props.banner.src})`}}>
            <div className="container-844 black-cards">
                <div className="row">
                    <div className="col-md-auto black-card-hover">
                        <a href="./india-entry-strategies.html" className="text-decoration-none text-white">India Entry Strategies</a>
                    </div>
                    <div className="col-md-auto black-card-hover">
                        <a href="./india-subsidiary.html" className="text-decoration-none text-white">India Subsidiary</a>
                    </div>
                    <div className="col-md-auto black-card-hover">
                        <a href="./subsidiary-support.html" className="text-decoration-none text-white">Subsidiary Support</a>
                    </div>
                    <div className="col-md-auto black-card-hover">
                        <a href="./india-peo-services.html" className="text-decoration-none text-white">India PEO Services</a>
                    </div>
                    <div className="col-md-auto black-card-hover">
                        <a href="./small-business-support.html" className="text-decoration-none text-white">Small Business Support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection