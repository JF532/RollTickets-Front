import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompra from "../../Components/CardCompra";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
export default function Compra() {
  const [filme, setFilme] = useState([null]);
  const { id } = useParams();

  const getFilme = () => {
    axios
      .get(`http://localhost:8080/api/filmes/${id}`) // só a URL, sem params
      .then((response) => {
        setFilme(response.data); // assume que backend retorna array de filmes diretamente
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes do backend", error);
      });
  };

  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilme();
  }, []);

  return (
    <div className="className=w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />

      <div>
        <CardCompra key={filme.id} movie={filme}/>
      </div>

      <Footer />
    </div>
  );
}
