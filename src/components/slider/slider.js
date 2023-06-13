import React from "react";    
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";

import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';
import card5 from './img/card5.png';




const Slider = () => {



    return(
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            speed={5000}
            centeredSlides={true}
            autoplay={{
            delay: 1,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
                >
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card1}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card2}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card3}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card4}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card5}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card1}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card2}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card3}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card4}/></SwiperSlide>
                    <SwiperSlide><img className="slider__photos-item" alt="sliderphoto"  src={card5}/></SwiperSlide>
            </Swiper>
    )
}
export default Slider
