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

  const getFilmes = () => {
    axios
      .get(props.url) // só a URL, sem params
      .then((response) => {
        setFilmes(response.data); // assume que backend retorna array de filmes diretamente
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes do backend", error);
      });
  };

  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilmes();
  }, []);
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
      <div className="w-screen h-screen flex justify-center items-center ">
        <Swp
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          loop={true}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 320,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper "
        >
          {filmes.map((filme, index) => (
            <SwiperSlide key={index}>
              <img
                width={500}
                height={500}
                src={filme.imageUrl}
                alt="image 1"
                className="w-[383px] h-[574px] object-cover rounded-3xl shadow-xl/30"
              />
            </SwiperSlide>
          ))}
        </Swp>
      </div>
    </div>
  );
}
