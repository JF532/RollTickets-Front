import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineEventSeat } from "react-icons/md";

export default function SeatPicker({
  capacidade,
  setAssento,
  assentosReservados = [],
  sessaoSelecionada,
  atualizarAssentosReservados,
}) {
  // Gera array com números de 1 até a capacidade da sala
  const assentos = Array.from({ length: capacidade }, (_, i) => i + 1);

  const [assentosSelecionados, setAssentosSelecionados] = useState([]); //Serve para armazenas os assentos que o usuário armazenou

  const [mensagem, setMensagem] = useState(""); //Serve só para armazenar a mensagem para o usuário

  const handleClick = (num) => {
    setAssentosSelecionados(
      (
        prev //Atualiza o assentosSelecionados com a lista
      ) =>
        prev.some((a) => a.numero === num)
          ? prev.filter((a) => a.numero !== num)
          : [...prev, { numero: num, fileira: "A" }] //Se o assento já estiver selecionado remove ele da lista "filter", caso ele não esteja, adiciona ele na lista
    );
    setAssento(num); // Se quiser passar só o último assento selecionado
  };

  const confirmarReserva = async () => {
    try {
      //Percorre assentosSelecionados e manda isso aqui de baixo para o back, no caso ele retorna uma lista de assentos
      const payload = assentosSelecionados.map((a) => ({
        numero: a.numero.toString(),
        fileira: a.fileira,
        sala: { id: sessaoSelecionada.sala.id },
        sessao: { id: sessaoSelecionada.id },
      }));

      await axios.post("http://localhost:8080/api/assentos/reservar", payload); //Manda a lista(payload) para o back

      setMensagem("Reserva realizada com sucesso!");
      setAssentosSelecionados([]); //Limpa os assentos selecionados
      atualizarAssentosReservados(); //Chama essa função para atualizar os assentos que estão ocupados
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao reservar assentos.");
    }
  };

  useEffect(() => {
    console.log("Assentos Selecionados:", assentosSelecionados);
  }, [assentosSelecionados]);

  useEffect(() => {
    setAssentosSelecionados([]); // Limpa os assentos selecionados ao trocar de sessão
  }, [sessaoSelecionada]);

   useEffect(() => { //Serve para limpar a mensagem depois de 3 segundos 
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  return (
    <div className="w-auto h-auto mt-40 ml-20 p-4 bg-gray-900 rounded-md text-white">
      <h2 className="w-100 ml-20 text-center text-2xl mb-10 font-semibold">
        Selecione seus assentos
      </h2>


      <div>
      <div className="flex  items-center-safe">
        <div className="grid grid-cols-8 gap-4 mb-4">
          {assentos.map((num) => {
            const ocupado = assentosReservados.includes(num); //Verifica se o assento está ocupado
            const selecionado = assentosSelecionados.some(
              (a) => a.numero === num
            ); //Verifica se o assento está selecionado

            return (
              <button
                key={num}
                type="button"
                onClick={() => !ocupado && handleClick(num)} //Só chama handleClick se o assento n estiver ocupado
                disabled={ocupado} //Se estiver ocupado desativa o botão
                className={`w-14 h-14 text-xl flex items-center justify-center border-2 border-black p-2 rounded ${
                  ocupado
                    ? "bg-red-700 cursor-not-allowed" //Cor do botão se ele estiver ocupado
                    : selecionado
                    ? "bg-[#81318a]  cursor-pointer" //Cor do botão se ele for selecionado
                    : "bg-gray-800 hover:bg-gray-700  cursor-pointer" //Cor se ele estiver livre
                }`}
              >
                <MdOutlineEventSeat />{" "}
                {/* Numero vai aparecer dentro do botão */}
              </button>
            );
          })}
        </div>
        {assentosSelecionados.length > 0 && (
          
            <div className=" ml-40 border-2 border-[#81318a] rounded p-10">
              <ul className="">
                <h1 className="mb-3 text-[#793381] font-semibold">
                  Ingressos Selecionados:
                </h1>
                {assentosSelecionados.map((a) => (
                  <li className="text-gray-300" key={a.numero}>
                    Fileira <span className="text-[#b966c2]">{a.fileira}</span>{" "}
                    - Assento <span className="text-[#81318a]">{a.numero}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={confirmarReserva}
                className="w-full  bg-[#81318a] hover:bg-[#b966c2] text-white mt-6 py-2 px-4 rounded cursor-pointer"
              >
                Confirmar Reserva
              </button>
            </div>
          
        )}
       
      </div>
         {mensagem && <p className="mt-6 text-center text-[#b966c2] font-semibold animate-fadeIn">{mensagem}</p>}{" "}
        {/* Exibi uma mensagem que a gente colocou lá em cima */}  
      </div>
    </div>
  );
}
