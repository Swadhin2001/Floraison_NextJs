import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '@/assets/apexit.webp'
import image2 from '@/assets/appiness.webp'
import image3 from '@/assets/aus.webp'
import image4 from '@/assets/betterworks.webp'
import image5 from '@/assets/cerium.webp'
import image6 from '@/assets/chemicasoft.webp'
import image7 from '@/assets/cr2.webp'
import image8 from '@/assets/education-first.webp'
import image9 from '@/assets/efficieny-leaders.webp'
import image10 from '@/assets/enclouden.webp'
import image11 from '@/assets/fastenal.webp'
import image12 from '@/assets/g2.webp'
import image13 from '@/assets/global-value-web.webp'
import image14 from '@/assets/hr-com.webp'
import image15 from '@/assets/imedrix.webp'
import image16 from '@/assets/innovatia.webp'
import image17 from '@/assets/lifesignals.webp'
import image18 from '@/assets/market-medium.webp'
import image19 from '@/assets/marvin.webp'
import image20 from '@/assets/monsanto.webp'
import image21 from '@/assets/netsentries.webp'
import image22 from '@/assets/nimesa.webp'
import image23 from '@/assets/servian.webp'
import image24 from '@/assets/stp.webp'
import image25 from '@/assets/tastemaste.webp'
import image26 from '@/assets/toolagen.webp'
import image27 from '@/assets/transteel.webp'
import image28 from '@/assets/tribuspoint.webp'
import image29 from '@/assets/tsujikawa.webp'
import image30 from '@/assets/velocityglobal.webp'
import image31 from '@/assets/ventura.webp'
import image32 from '@/assets/zebra.webp'
import image33 from '@/assets/zyme.webp'
import Image from 'next/image'


function Home_slider() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };
  return (
    <div>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} transitionDuration={500} className='container' >
            <div >                
                <Image src={image1} alt="" />                
            </div>
            <div >                
                <Image src={image2} alt="" />                
            </div>
            <div >                
                <Image src={image3} alt="" />                
            </div>
            <div >                
                <Image src={image4} alt="" />                
            </div>
            <div >                
                <Image src={image5} alt="" />                
            </div>
            <div >                
                <Image src={image6} alt="" />                
            </div>
            <div >                
                <Image src={image7} alt="" />                
            </div>
            <div >                
                <Image src={image8} alt="" />                
            </div>
            <div >                
                <Image src={image9} alt="" />                
            </div>
            <div >                
                <Image src={image10} alt="" />                
            </div>
            <div >                
                <Image src={image11} alt="" />                
            </div>
            <div >                
                <Image src={image12} alt="" />                
            </div>
            <div >                
                <Image src={image13} alt="" />                
            </div>
            <div >                
                <Image src={image14} alt="" />                
            </div>
            <div >                
                <Image src={image15} alt="" />                
            </div>
            <div >                
                <Image src={image16} alt="" />                
            </div>
            <div >                
                <Image src={image17} alt="" />                
            </div>
            <div >                
                <Image src={image18} alt="" />                
            </div>
            <div >                
                <Image src={image19} alt="" />                
            </div>
            <div >                
                <Image src={image20} alt="" />                
            </div>
            <div >                
                <Image src={image21} alt="" />                
            </div>
            <div >                
                <Image src={image22} alt="" />                
            </div>
            <div >                
                <Image src={image23} alt="" />                
            </div>
            <div >                
                <Image src={image24} alt="" />                
            </div>
            <div >                
                <Image src={image25} alt="" />                
            </div>
            <div >                
                <Image src={image26} alt="" />                
            </div>
            <div >                
                <Image src={image27} alt="" />                
            </div>
            <div >                
                <Image src={image28} alt="" />                
            </div>
            <div >                
                <Image src={image29} alt="" />                
            </div>
            <div >                
                <Image src={image30} alt="" />                
            </div>
            <div >                
                <Image src={image31} alt="" />                
            </div>
            <div >                
                <Image src={image32} alt="" />                
            </div>
            <div >                
                <Image src={image33} alt="" />                
            </div>
            
        </Carousel>
    </div>
  )
}

export default Home_slider