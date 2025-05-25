import React from "react";
import { Swiper as SwiperLib, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import teste from "../IMG/Coringa.jpg";
import teste1 from "../IMG/Fortnite.jpg";
import teste2 from "../IMG/Homem-Aranha.jpg";
import teste3 from "../IMG/RickyAndMorty.jpg";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
export default function Swiper() {
  return (
    <div className="w-full h-full mt-10 flex justify-center items-center">
      {" "}
      {/*BODY*/}
      <div>
        <SwiperLib
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 2000,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="swiper-image" src={teste} alt="Filme 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-image" src={teste1} alt="Filme 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-image" src={teste2} alt="Filme 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-image" src={teste3} alt="Filme 4" />
          </SwiperSlide>
        </SwiperLib>
      </div>
    </div>
  );
}
