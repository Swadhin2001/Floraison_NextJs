import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import image1 from '@/assets/Floraison-India-Entry-Strategies-India-Subsidiary-border-new.jpg'
import image2 from '@/assets/Floraison-India-Entry-Strategies-India-PEO-border-new.jpg'
import image3 from '@/assets/Floraison-Small-Business-Support-border-new.jpg'

class Carousels extends Component {
  state = {
    activeSilde: 0
  };

  handleSlideSelect = () => {};

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
      return (
        <li
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        >
        </li>
      );
    };

    const arrowStyle = {
      background: "transparent",
      border: 0,
      color: "#fff",
      fontSize: "80px"
    };
    const CustomRight = ({ onClick }) => (
      <button className="arrow right" onClick={onClick} style={arrowStyle}>
        <ArrowForwardIosIcon style={{ fontSize: "50px" }} />
      </button>
    );
    const CustomLeft = ({ onClick }) => (
      <button className="arrow left" onClick={onClick} style={arrowStyle}>
        <ArrowBackIosIcon style={{ fontSize: "50px" }} />
      </button>
    );
    return (
      // <!-- Main Carousel Section Start -->
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            <div>
                <Link href= '/resources-center' >
                    <Image src = {image1} className='index-horizontal-slide' alt=''/>
                </Link>
            </div>
            
            <div>
                <Link href= '/resources-center'>
                    <Image src = {image2} className='index-horizontal-slide' alt=''/>
                </Link>
            </div>
            
            <div>
                <Link href= '/resources-center'>
                    <Image src = {image3} className='index-horizontal-slide' alt=''/>
                </Link>
            </div>
            
            <div>
                <Link href= '/resources-center'>
                    <Image src = {image1} className='index-horizontal-slide' alt=''/>
                </Link>
            </div>
          </Carousel>
        </div>
      </div>
      /* <!-- Main Carousel Section End --> */
    );
  }
}

export default Carousels;
