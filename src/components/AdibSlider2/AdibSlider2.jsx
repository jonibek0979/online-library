import './AdibSlider2.scss'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { adib } from '../../lib/adib';
import { Link } from 'react-router-dom';

function AdibSlider2() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
              {
          adib && adib.slice(10,20).map((item, index) => (
            <SwiperSlide key={index}>
               <div className="home__card">
                      <Link to={`/author/${item.id}`}>
                        <img src={item.img} alt="" />
                      </Link>
                      <div className="card__innerr">
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        <div>
                          <span> <i className='bi bi-book'></i> {item.book}</span>
                          <span> <i className='bi bi-headphones'></i> {item.audio}</span>

                        </div>
                      </div>
                    </div>
            </SwiperSlide>

          ))
        }

      </Swiper>
    </>
  )
}

export default AdibSlider2