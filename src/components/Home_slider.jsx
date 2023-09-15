import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '@/assets/Floraison-India-Entry-Strategies-India-Subsidiary-border-new.jpg'
import image2 from '@/assets/Floraison-India-Entry-Strategies-India-PEO-border-new.jpg'
import image3 from '@/assets/Floraison-Small-Business-Support-border-new.jpg'
import image4 from '@/assets/Floraison-India-Entry-Strategies-India-Subsidiary-border-new.jpg'
import Image from 'next/image';


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
          breakpoint: { max: 1024, min: 800 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 800, min: 600 },
          items: 1
        }
      };
  return (
    <div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} transitionDuration={500} className='container-900'>
            <div>
                <Link href="./resource-center.html">
                    <Image src={image1} alt="" class="index-horizontal-slide"/>
                </Link>
            </div>
            <div>
                <Link href="./resource-center.html">
                    <Image src={image2} alt="" class="index-horizontal-slide"/>
                </Link>                
            </div>
            <div>
                <Link href="./resource-center.html">
                    <Image src={image3} alt="" class="index-horizontal-slide"/>
                </Link>                                
            </div>
            <div>
                <Link href="./resource-center.html">
                    <Image src={image4} alt="" class="index-horizontal-slide"/>
                </Link>                                
            </div>
        </Carousel>
    </div>
  )
}

export default Home_slider