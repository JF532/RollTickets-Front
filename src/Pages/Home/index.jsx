import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import teste from '../../IMG/Coringa.jpg'
import teste1 from '../../IMG/Fortnite.jpg'
import teste2 from '../../IMG/Homem-Aranha.jpg'
import teste3 from '../../IMG/RickyAndMorty.jpg'

import { AppNavbar } from "../../Components/Navbar";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import { IoSearch } from 'react-icons/io5';


function Home() {
  return (
    <div className='w-screen h-screen'>
      {/* <AppNavbar/> */}

      <nav className='flex w-full h-20 bg-purple-800 fixed items-center px-6 justify-between text-white'>

      <ul className='flex items-center gap-3'>
        <li className=''>Logo</li>
        <li className='border-2 border-solid p-2 rounded-lg'><a href="/cadastro" > Home </a></li>
        <li className='border-2 border-solid p-2 rounded-lg'>Filmes</li>
        <li className='border-2 border-solid p-2 rounded-lg border-black'>Horarido</li>
      </ul>


        <ul className='flex items-center gap-6'>
     
       
        <div className='flex items-center'>
        <input type="search" className='text-black rounded-l-lg' placeholder='Teste'></input>  
              <button className='rounded-r-lg bg-green-500 h-10 w-10 pl-3'>
              <IoSearch></IoSearch>
            </button>
        </div>
        
      
        <li><img src="" alt="Logo" /></li>
      </ul>

      </nav>
   
     
      <div className='w-full h-full bg-gray-900 flex flex-col justify-center items-center'>
       
        <div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth:1000,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
           className="meu-swiper"
          >
            <SwiperSlide><img className='swiper-image' src={teste} alt="Filme 1" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste1} alt="Filme 2" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste2} alt="Filme 3" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste3} alt="Filme 4" /></SwiperSlide>
            
          </Swiper>
        </div>


      </div>


    </div>
  );
}

export default Home;