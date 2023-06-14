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
            delay: 100,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card1}/>
                        <div className="slider__photos_item-descr">
                            Сozy chic for the playground
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card2}/>
                        <div className="slider__photos_item-descr">
                            Effortless Beach Style
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card3}/>
                        <div className="slider__photos_item-descr">
                            Forest School Essentials
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card4}/>
                        <div className="slider__photos_item-descr">
                            Playdate With Friends 5th
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card5}/>
                        <div className="slider__photos_item-descr">
                            Lounging at home
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card1}/>
                        <div className="slider__photos_item-descr">
                            Сozy chic for the playground
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card2}/>
                        <div className="slider__photos_item-descr">
                            Effortless Beach Style
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card3}/>
                        <div className="slider__photos_item-descr">
                            Forest School Essentials
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card4}/>
                        <div className="slider__photos_item-descr">
                            Playdate With Friends 5th
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="slider__photos_item" alt="sliderphoto"  src={card5}/>
                        <div className="slider__photos_item-descr">
                            Lounging at home
                        </div>
                    </SwiperSlide>
            </Swiper>
    )
}
export default Slider
