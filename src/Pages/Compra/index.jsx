import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompra from "../../Components/CardCompra";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SeatPicker from "../../Components/SeatPicker";
import { useParams } from "react-router-dom";

export default function Compra() {
  const [filme, setFilme] = useState([null]);
  const [sessao, setSessao] = useState();
  const [assento, setAssento] = useState([]);


  const { id } = useParams();

  const getFilme = () => {
    axios
      .get(`http://localhost:8080/api/filmes/${id}`)
      .then((response) => {
        setFilme(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes do backend", error);
      });
  };

  const getSessao = () => {
    axios
      .get(`http://localhost:8080/api/sessoes/${id}`)
      .then((response) => {
        setSessao(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as sessoes do backend", error);
      });
  };
  
 

  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilme();
    getSessao();

  }, []);


  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />

      <div className="flex ">
        <CardCompra key={filme.id} movie={filme} />

        <div className=" mt-35 ml-120 flex">
          <SeatPicker setAssento={setAssento}/> 

          <div className="mt-4 ml-25  text-white">


          

          </div>
        </div>
       
      </div>

      <Footer />
    </div>
  );
}
