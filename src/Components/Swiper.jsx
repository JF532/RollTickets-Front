import React, { useState, useEffect } from "react";
import { Swiper as Swp, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../index.css"


export default function Swiper(props) {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "156d2e5ce1b6c6c0fe56949f263204e1",
        language: "pt-BR",
        region: "BR",
      },
    }).then((response) => {
      setFilmes(response.data.results);
      console.log(response.data.results);
    });
  };

  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilmes();
  }, []);
  return (
    
    <div className="w-full h-screen bg-slate-900">
      <div className="flex justify-center mt-20 items-center">
        <h1 className="text-white text-5xl" style={{ fontFamily: "'ICA Rubrik', sans-serif" }}>{props.header}</h1>
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
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
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
