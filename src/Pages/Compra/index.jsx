import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCompra from "../../Components/CardCompra";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SeatPicker from "../../Components/SeatPicker";
import { useParams } from "react-router-dom";

export default function Compra() {
  const [filme, setFilme] = useState([null]);
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);
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

  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilme();
  }, []);

  return (
    <div className="w-auto min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />

      <div className="flex ">
        <CardCompra key={filme.id} movie={filme} />

        <div className=" mt-35 ml-120 flex">
          <SeatPicker idSessao={id} onSelect={setAssentosSelecionados} />

          <div className="mt-4 ml-25  text-white">
            {assentosSelecionados.length > 0 && ( //Isso é só para que esse quadradinho apareça só quando clicarem em algo
              <div className="flex flex-col">
                <ul className="border-3 border-[#81318a] rounded p-6 bg-[#6321691e]">
                  <h1 className="mb-3 text-[#793381] font-semibold">
                    Ingressos Selecionados:{" "}
                  </h1>
                  {assentosSelecionados.map((a) => ( //Faz um map dos assentos que eu selecionei
                    <li className="text-gray-300" key={a.id}>
                      Fileira{" "}
                      <span className="text-[#b966c2]">
                        {a.assento.fileira}
                      </span>{" "}
                      - Assento{" "}
                      <span className="text-[#81318a]">
                        {" "}
                        {a.assento.numero}{" "}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="text-white p-4 border-4 border-[#81318a] rounded mt-4 hover:bg-gray-800 cursor-pointer bg-[#6321691e] font-semibold">Comprar</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
