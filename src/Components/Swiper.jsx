import React, { useState, useEffect } from "react";
import { Swiper as Swp, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../index.css";

export default function Swiper(props) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setFilmes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes", error);
      });
  }, [props.url]);

  return (
    <div className="w-full h-screen bg-slate-900">
      <div className="flex justify-center mt-20 items-center">
        <h1
          className="text-white text-5xl"
          style={{ fontFamily: "'ICA Rubrik', sans-serif" }}
        >
          {props.header}
        </h1>
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
        <Swp
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          loop={true}
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 320,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {filmes.map((filme, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) =>
                isActive ? (
                  <a href="/meus-ingressos" className="inline-block">
                    <img
                      src={filme.imageUrl}
                      alt={`Filme ${index + 1}`}
                      className="w-[383px] h-[574px] object-cover rounded-3xl shadow-xl/30"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                ) : (
                  <img
                    src={filme.imageUrl}
                    alt={`Filme ${index + 1}`}
                    className="w-[383px] h-[574px] object-cover rounded-3xl shadow-xl/30"
                    style={{ opacity: 0.6, cursor: "grab" }} 
                  />
                )
              }
            </SwiperSlide>
          ))}
        </Swp>
      </div>
    </div>
  );
}
