import React from "react";
import { Swiper as Swp, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


import Coringa from "../IMG/Coringa.jpg";
import Fortnite from "../IMG/Fortnite.jpg";
import HomemAranha from "../IMG/Homem-Aranha.jpg";
import RickyAndMorty from "../IMG/RickyAndMorty.jpg";

const filmes = [Coringa, Fortnite, HomemAranha, RickyAndMorty];

export default function Swiper() {
    return (
        <div className="w-full h-screen bg-slate-900">

            <div className='w-screen h-screen flex justify-center items-center px-20'>
                <Swp
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
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
                    className='mySwiper'
                >
                    {
                        filmes.map((filme, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={filme}
                                    className="w-[750px] h-[550px] object-cover rounded-3xl shadow-xl/30"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swp>
            </div>
        </div>
    );
}
