import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompra from "../../Components/CardCompra";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SeatPicker from "../../Components/SeatPicker";
import { useParams } from "react-router-dom";
import Dropdown from "../../Components/Dropdown";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Importing a shopping cart icon (from react-icons)
import { useNavigate } from "react-router-dom";

export default function Compra() {
  const navigate = useNavigate();

  const [filme, setFilme] = useState(null); //Guarda o filme selecionado
  const [sessoes, setSessoes] = useState([]); //Guarda todas as sessões para aquele filme selecionado
  const [sessaoSelecionada, setSessaoSelecionada] = useState(null); //Objeto da sessão que foi escolhida pelo usuário
  const [assento, setAssento] = useState([]); //Array para guardar os assentos selecionados
  const [assentosReservados, setAssentosReservados] = useState([]); //Guarda quais assentos já foram reservados

  const { id } = useParams(); //Pega o id da URL

  useEffect(() => {
    //Busca os dados do filmes e das sessões, atualiza quando vc troca de filme ou sessão
    axios
      .get(`http://localhost:8080/api/filmes/${id}`)
      .then((response) => setFilme(response.data))
      .catch((error) => console.error("Erro ao buscar filme", error));

    axios
      .get(`http://localhost:8080/api/sessoes/todas/${id}`)
      .then((response) => setSessoes(response.data))
      .catch((error) => console.error("Erro ao buscar sessões", error));
  }, [id]);

  const buscarAssentosReservados = () => {
    //Função para buscar assentos reservados, ou seja, os assentos que estão no back
    if (!sessaoSelecionada) return; //Só executa se uma sessão tiver sido escolhida

    axios
      .get(
        `http://localhost:8080/api/assentos/reservados_status/${sessaoSelecionada.id}`
      )
      .then((response) => {
        const ocupados = response.data.map((assento) => ({
          numero: Number(assento.numero),
          fileira: assento.fileira,
          status: assento.statusPagamento,
        })); // Retorna do get os assentos que estão ocupados e atualizam o assentosReservados com esses valores(fileira e número)
        setAssentosReservados(ocupados);
      })
      .catch(() => setAssentosReservados([]));
  };

  useEffect(() => {
    buscarAssentosReservados();
  }, [sessaoSelecionada]); //Toda vez que a sessão mudar, ele chama a função para mostrar os assentos que estão reservados

  const handleGoToCart = () => {
    navigate("/carrinho");
  };

  console.log(sessaoSelecionada);
  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />
      <div
        className="fixed top-30 right-4 z-50 cursor-pointer"
        onClick={handleGoToCart}
      >
        <AiOutlineShoppingCart size={32} color="#81318a" />
      </div>

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
              filme={filme}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
