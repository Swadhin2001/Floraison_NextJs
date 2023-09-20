import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '@/assets/Floraison-India-Entry-Strategies-India-Subsidiary-border-new.jpg'
import image2 from '@/assets/Floraison-India-Entry-Strategies-India-PEO-border-new.jpg'
import image3 from '@/assets/Floraison-Small-Business-Support-border-new.jpg'


function Home_slider() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 424 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 424, min: 0 },
          items: 1
        }
      };
  return (
    <>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} transitionDuration={500} className='container-900' >
            <div>
                <Link href= '/resources-center'>
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