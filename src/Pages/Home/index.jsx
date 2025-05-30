import { Link } from "react-router-dom";

import Grid from "../../Components/Grid";
import Swiper from "../../Components/Swiper";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <NavBar />

      <Swiper />

      <Grid url="https://api.themoviedb.org/3/movie/upcoming"/>

      <Footer/>
    </div>
  );
}

export default Home;
