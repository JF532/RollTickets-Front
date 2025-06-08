import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SeatPicker({ idSessao, onSelect }) {
  const [assentos, setAssentos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/assentoSessao/sessoes/${idSessao}/assentos`
      )
      .then((res) => setAssentos(res.data))
      .catch((err) => console.error("Erro ao buscar assentos", err));
  }, [idSessao]);

  const handleSelect = (assento) => {
    if (assento.reservado) return;

    const ocupado = selecionados.find((a) => a.id === assento.id);
    let novos;
    if (ocupado) {
      novos = selecionados.filter((a) => a.id !== assento.id);
    } else {
      novos = [...selecionados, assento];
    }
    setSelecionados(novos);
    onSelect(novos);
  };

  const getAssento = (fileira, numero) => {
    //Esse get é para pegar o assento associado a filera e número
    return assentos.find(
      (a) =>
        a.assento.fileira === fileira && a.assento.numero === numero.toString()
    );
  };

  const fileiras = ["A", "B", "C","D"];

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 rounded-md text-white">
      <h2 className="text-center text-2xl mb-10 font-semibold">
        Selecione seus assentos
      </h2>


      {fileiras.map((fileira) => ( //Map para listar todas suas fileras
        <div className="flex items-center mb-4">
          <div className="w-6 font-bold">{fileira}</div>
          <div className="flex gap-3 ml-4">
            {[1, 2, 3, 4].map((num) => {//Isso são os números de assentos na Fileira
              const assento = getAssento(fileira, num); //Pega o número fa filera e chama o get como o nome da fileira e o numero
              if (!assento) return null;
              const selecionado = selecionados.find((s) => s.id === assento.id); //Verifica se o assento atual já está na lista de assentos selecionados
              return (
                <button
                  key={assento.id}
                  disabled={assento.reservado} //Se ele estiver reservado, reservado === true o botão fica desabilitado
                  onClick={() => handleSelect(assento)} // Chama o handleSelect passando o objeto assento para saber qual eu tô selecionando
                  className={`w-20 h-20 rounded flex items-center justify-center font-semibold
                  ${
                    assento.reservado
                      ? "bg-red-700 cursor-not-allowed opacity-70" // Se ele estiver reservado
                      : selecionado
                      ? "bg-[#81318a] text-white cursor-pointer" // Se for selecinado
                      : "bg-gray-700 hover:bg-gray-600 cursor-pointer" //Se ele n for selecionado
                  }`}
                >
                  {assento.assento.numero}
                </button>
              );
            })}
          </div>
        </div>
      ))}

 

      <div className="mx-auto mt-8 w-3/4 h-6 bg-gray-700 rounded border border-gray-500 shadow-inner"></div>
      <p className="text-center mt-2 italic text-gray-400">Tela</p>
    </div>
  );
}
