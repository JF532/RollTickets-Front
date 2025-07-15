import React from "react";
import Grid from "../../Components/Grid";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function FilmesHorarios() {
  return (
    <div>
      <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
        <Navbar />
        <Grid
          url="http://localhost:8080/api/filmes"
          header="Em Cartaz"
          name="FilmesHorarios"
        />
      </div>
      <Footer />
    </div>
  );
}
