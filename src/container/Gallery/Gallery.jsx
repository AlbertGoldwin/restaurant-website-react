import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { FaInstagram } from 'react-icons/fa';

import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Gallery.css';

const Gallery = () => (
  <div className="app__gallery flex__center section__padding">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis
        Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
      </p>
      <button className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        // centeredSlides
        // centeredSlidesBounds
        modules={[Pagination]}
        className="app__gallery-images_swiper"
      >
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery01} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery02} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery03} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery04} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery05} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="app__gallery-images_slide">
          <img src={images.gallery06} alt="" loading="lazy" />
          <div className="slide-overlay">
            <FaInstagram className="insta" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

export default Gallery;
