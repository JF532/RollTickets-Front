import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import teste from '../../IMG/Coringa.jpg'
import teste1 from '../../IMG/Fortnite.jpg'
import teste2 from '../../IMG/Homem-Aranha.jpg'
import teste3 from '../../IMG/RickyAndMorty.jpg'

import { Card } from "flowbite-react";

import { AppNavbar } from "../../Components/Navbar";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import { IoSearch } from 'react-icons/io5';
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


function Home() {
  return (
    <div className='w-screen min-h-screen bg-gray-900'>
      {/* <AppNavbar/> */}

      <nav className='flex w-full h-20 bg-[#81318a] items-center px-6 justify-between text-white'>

        <ul className='flex items-center gap-3'>
          <li> <IoTicketOutline className="text-white text-4xl" /> </li>
          <li className='  p-2 rounded-lg'><a className='hover:text-black' href="/cadastro" > Home </a></li>
          <li className='  p-2 rounded-lg'>Filmes</li>
          <li className='  p-2 rounded-lg border-white'>Horario</li>
        </ul>



        <ul className='flex items-center gap-6'>


          <div className="relative text-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="text-gray-400 text-lg" />
            </span>
            <input
              type="search"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-black"
              placeholder="Pesquisar filme"
            />
          </div>


          <li><CgProfile className="text-white text-4xl" /></li>

        </ul>

      </nav>



      <div className='w-full h-full mt-10 flex justify-center items-center'> {/*BODY*/}


        <div>
          <Swiper
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
            <SwiperSlide><img className='swiper-image' src={teste} alt="Filme 1" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste1} alt="Filme 2" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste2} alt="Filme 3" /></SwiperSlide>
            <SwiperSlide><img className='swiper-image' src={teste3} alt="Filme 4" /></SwiperSlide>

          </Swiper>
        </div>


      </div>

      <div className='flex justify-center mt-20 items-center'>

        <div class="grid grid-cols-4 gap-4">
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

            
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

          
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

          
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

          
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

          
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>

          
          <div>

            <Card
              className="max-w-sm"
              renderImage={() => <img width={500} height={500} src={teste} alt="image 1" />}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;