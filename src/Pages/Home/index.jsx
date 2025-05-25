import { Link } from "react-router-dom";

import Grid from "../../Components/Grid";
import Swiper from "../../Components/Swiper";
import NavBar from "../../Components/Navbar";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-900 overflow-x-hidden">
      <NavBar />

      <Swiper />

      <Grid />
    </div>
  );
}

export default Home;
