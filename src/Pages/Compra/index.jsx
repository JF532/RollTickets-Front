import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompra from "../../Components/CardCompra";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SeatPicker from "../../Components/SeatPicker";
import { useParams } from "react-router-dom";
import Dropdown from "../../Components/Dropdown";

export default function Compra() {
  const [filme, setFilme] = useState(null);
  const [sessoes, setSessoes] = useState([]);
  const [sessaoSelecionada, setSessaoSelecionada] = useState(null); //Objeto da sessão que foi escolhida pelo usuário
  const [assento, setAssento] = useState([]); //Array para guardar os assentos selecionados
  const [assentosReservados, setAssentosReservados] = useState([]); //Guarda quais assentos já foram reservados

  const { id } = useParams();

  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/filmes/${id}`)
      .then((response) => setFilme(response.data))
      .catch((error) => console.error("Erro ao buscar filme", error));

    axios
      .get(`http://localhost:8080/api/sessoes/todas/${id}`)
      .then((response) => setSessoes(response.data))
      .catch((error) => console.error("Erro ao buscar sessões", error));
  }, [id]);

  const buscarAssentosReservados = () => { //Função para buscar assentos reservados, ou seja, os assentos que estão no back
    if (!sessaoSelecionada) return; //Só executa se uma sessão tiver sido executada

    axios
      .get(`http://localhost:8080/api/assentos/reservados/${sessaoSelecionada.id}`)
      .then((response) => {
        const ocupados = response.data.map((assento) => Number(assento.numero)); // Retorna do get os assentos que estão ocupados e atualizam o assentosReservados com esses valores
        setAssentosReservados(ocupados);
      })
      .catch(() => setAssentosReservados([]));
  };

  useEffect(() => {
    buscarAssentosReservados();
  }, [sessaoSelecionada]);

  console.log(sessaoSelecionada);
  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />

      <div className="flex p-6">
        {filme && <CardCompra movie={filme} />}

        <div className="mt-6 ml-6">
          <Dropdown
            sessoes={sessoes}
            setSessaoSelecionada={setSessaoSelecionada}
          />
        </div>

        <div className="mt-6 ml-6">
          {sessaoSelecionada && (
            <SeatPicker
              setAssento={setAssento}
              capacidade={sessaoSelecionada?.sala?.capacidade}
              assentosReservados={assentosReservados}
              sessaoSelecionada={sessaoSelecionada}
              atualizarAssentosReservados={buscarAssentosReservados}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
