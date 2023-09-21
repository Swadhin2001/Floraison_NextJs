import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '@/assets/Floraison-India-Entry-Strategies-India-Subsidiary-border-new.jpg'
import image2 from '@/assets/Floraison-India-Entry-Strategies-India-PEO-border-new.jpg'
import image3 from '@/assets/Floraison-Small-Business-Support-border-new.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Home_slider() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 900 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 900, min: 600 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 600, min: 424 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 424, min: 0 },
          items: 1
        }
      };
      
      const onClick=()=>{() => onClick()};
      const CustomRight = ({ onClick }) => (
        <button className="arrow right" onClick={onClick} >
          <ArrowForwardIosIcon style={{ fontSize: "30px", color : "white" }} />
        </button>
      );
      const CustomLeft = ({ onClick }) => (
        <button className="arrow left" onClick={onClick} >
          <ArrowBackIosIcon style={{ fontSize: "30px", color : "white" }} />
        </button>
      );
  return (

    <>
    
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} transitionDuration={500} className='custom-container-900' renderButtonGroupOutside={false}  customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}>
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
    </>
  )
}

export default Home_slider