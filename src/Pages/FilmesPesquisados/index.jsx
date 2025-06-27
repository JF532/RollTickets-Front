import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Grid from "../../Components/Grid";
import { buscarFilmesPorTitulo } from "../../Controllers/api";
import { useParams } from "react-router";

export default function FilmesPesquisados() {
  const { titulo } = useParams();
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    buscarFilmesPorTitulo(titulo)
      .then((res) => {
        setFilmes(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar filmes:", err);
        setFilmes([]);
      });
  }, [titulo]);

  return (
    <div>
      <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
        <Navbar />
        <Grid
          filmes={filmes}
          name="FilmesPesquisados"
          header={`Resultados para "${titulo}"`}
        />
      </div>
      <Footer />
    </div>
  );
}
