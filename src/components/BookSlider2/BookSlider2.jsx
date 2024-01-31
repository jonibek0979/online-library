import './BookSlider2.scss'
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
import { Link } from 'react-router-dom';
import { books } from '../../lib/books';

function BookSlider2() {
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
          books && books.slice(24,49).map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item__card">
                <Link to={`/bookDetail/${item.id}`}>
                  <img src={item.img} alt="" />
                </Link>
                <h3>{item.name}</h3>
                <p>{item.adibName}</p>
                <h6>sdhfugyryg</h6>
              </div>
            </SwiperSlide>

          ))
        }

      </Swiper>
    </>
  )
}

export default BookSlider2