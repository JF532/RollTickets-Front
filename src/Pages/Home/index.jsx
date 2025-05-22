import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import teste from '../../IMG/test1.png'
import teste1 from '../../IMG/test2.png'
import teste2 from '../../IMG/test3.png'

import { AppNavbar } from "../../Components/Navbar";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';


function Home() {
  return (
    <div>
      <AppNavbar />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h5>Bem-vindo ao RollTickets</h5>
        <Link to="/cadastro">
          <button>Ir para página</button>
        </Link>
      </div>


      <div style={{ width: '75%', margin: '0 auto', backgroundColor: '#242424' }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 87,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img className='swiper-image' src={teste} alt="Filme 1" /></SwiperSlide>
          <SwiperSlide><img className='swiper-image' src={teste1} alt="Filme 2" /></SwiperSlide>
          <SwiperSlide><img className='swiper-image' src={teste2} alt="Filme 3" /></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}

export default Home;
