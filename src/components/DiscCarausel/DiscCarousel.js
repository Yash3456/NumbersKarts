
import "./DiscCarousel.css"
import Card from '../Storecard/Storecard'


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        
            <div className="swiper-container">
                <div className="swiper-heading">
                    <h1 className="orangeText">Deals of The Day</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        750: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1050: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1399: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SliderButtons />
                    <SwiperSlide >
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />

                    </SwiperSlide>
                </Swiper>
            </div>

            

        
    );
}

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="s-buttons flexCenter">
            <button className="button" onClick={() => swiper.slidePrev()}>&lt;</button>
            <button className="button" onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}