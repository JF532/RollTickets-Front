import React from "react";
import Grid from "../../Components/Grid";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function FilmesHorarios() {
  return (
    <div className="w-screen min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />
      <Grid />
      <Footer/>
    </div>
  );
}
