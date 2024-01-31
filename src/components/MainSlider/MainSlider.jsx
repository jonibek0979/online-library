import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './MainSlider.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import adib from '../../assets/awatar/slider__awatar.png'
import { slider } from '../../lib/Slider';


function MainSlider() {
   return (
      <>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
         >

            {
               slider && slider.map((item, index) => (
                  <SwiperSlide key={index}>
                     <div className="slider__item">
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="" />
                     </div>
                  </SwiperSlide>
               ))

            }

         </Swiper>
      </>
   );
}

export default MainSlider
