import React from 'react';
import Calendar from '../components/Calendar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../components/images/1.jpeg';
import image2 from '../components/images/2.jpeg';
import image3 from '../components/images/3.jpeg';
import image4 from '../components/images/4.jpeg';
import image5 from '../components/images/5.jpeg';
import image6 from '../components/images/6.jpeg';
import image7 from '../components/images/7.jpeg';
import image8 from '../components/images/8.jpeg';
import image9 from '../components/images/9.jpeg';
import image10 from '../components/images/10.jpeg';
import image11 from '../components/images/11.jpeg';
import image12 from '../components/images/12.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../App.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Calendar2 from '../components/Calendar2';

function home() {
  return (
      <div style={{ marginBottom: '50px' }}>
         <>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* Use imported images as sources for <img> tags */}
            <SwiperSlide>
              <img src={image1} alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="Image 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image5} alt="Image 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image6} alt="Image 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} alt="Image 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image8} alt="Image 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image9} alt="Image 9" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image10} alt="Image 10" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image11} alt="Image 11" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image12} alt="Image 12" />
            </SwiperSlide>
          </Swiper>
        </>
      
        
        <a id="calendar-section">
  
  <Calendar2 />
</a>
        
      </div>
    );
  }
    
  
  export default home;