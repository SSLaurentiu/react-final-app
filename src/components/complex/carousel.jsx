import React from "react";
import "../Styling/carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import SwiperCore, { EffectCoverFlow, Pagination,Navigation } from "swiper";
// SwiperCore.use([EffectCoverFlow, Pagination,Navigation]);


import slide_image_1 from "../assets/images/image_1.png";
import slide_image_2 from "../assets/images/image_2.png";
import slide_image_3 from "../assets/images/image_3.png";
import slide_image_4 from "../assets/images/image_4.png";
import slide_image_5 from "../assets/images/image_5.png";
import slide_image_6 from "../assets/images/image_6.png";
import slide_image_7 from "../assets/images/image_7.png";
import slide_image_8 from "../assets/images/image_8.png";
import slide_image_9 from "../assets/images/image_9.png";
import slide_image_10 from "../assets/images/image_10.png";
import slide_image_11 from "../assets/images/image_11.png";
import slide_image_12 from "../assets/images/image_12.png";
import slide_image_13 from "../assets/images/image_13.png";
import slide_image_14 from "../assets/images/image_14.png";
import slide_image_15 from "../assets/images/image_15.png";
import slide_image_16 from "../assets/images/image_16.png";
import slide_image_17 from "../assets/images/image_17.png";
import slide_image_18 from "../assets/images/image_18.png";
import slide_image_19 from "../assets/images/image_19.png";
import slide_image_20 from "../assets/images/image_20.png";
import slide_image_21 from "../assets/images/image_21.png";
import slide_image_22 from "../assets/images/image_22.png";
import slide_image_23 from "../assets/images/image_23.png";
import slide_image_24 from "../assets/images/image_24.png";
import slide_image_25 from "../assets/images/image_25.png";
import slide_image_26 from "../assets/images/image_26.png";
import slide_image_27 from "../assets/images/image_27.png";
import slide_image_28 from "../assets/images/image_28.png";
import slide_image_29 from "../assets/images/image_29.png";
import slide_image_30 from "../assets/images/image_30.png";

function Carousel() {
  return (
    <div className="slider_container">
      <h1 className="heading">Galerie </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_17} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_18} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_19} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_20} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_21} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_22} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_23} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_24} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_25} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_26} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_27} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_28} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_29} alt="slider_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_30} alt="slider_image" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
