import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineEventSeat } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SeatPicker({
  capacidade,
  setAssento,
  assentosReservados = [],
  sessaoSelecionada,
  atualizarAssentosReservados,
  filme,
}) {
  // Gera array com números de 1 até a capacidade da sala
  const assentos = [];
  const navigate = useNavigate();
  const fileiras = ["A", "B", "C", "D", "E", "F", "G"];
  const capacidadePorFileira = 8;

  fileiras.forEach((fileira) => {
    //Isso daqui serve para ele colocar dinamicamente as letras e os números
    for (let i = 1; i <= capacidadePorFileira; i++) {
      assentos.push({ numero: i, fileira });
    }
  });

  const [assentosSelecionados, setAssentosSelecionados] = useState([]); //Serve para armazenas os assentos que o usuário armazenou

  const [mensagem, setMensagem] = useState(""); //Serve só para armazenar a mensagem para o usuário

  const [carregando, setCarregando] = useState(false); //Essa constante é só para que quando o usúario clique uma vez, o botão fique desabilitado para não ter várias solicitações

  //AGORA ABAIXO VAI SER A DIFERENÇA ENTRE O FILME 2D E 3D
  const tresD = filme?.formato === "TRES_D"; // Verifica se o formato do filme é 3D
  const preco = tresD ? 25.0 : 20.0; // Pega o valor do filme que irá ser diferente se for 3D
  const incluiOculos = tresD;
  const taxaExtra3D = tresD ? 3.5 : 0.0;
  const tipoIngresso = tresD ? "TRES_D" : "DOIS_D"; //Se tresD for verdadeiro, retorna "TRES_D", se for falso retorna "DOIS_D"

  const handleClick = (numero, fileira) => {
    //Verifica se o assento já está selecionado
    setAssentosSelecionados(
      (
        prev //Atualiza o assentosSelecionados com a lista
      ) =>
        prev.some((a) => a.numero === numero && a.fileira === fileira)
          ? prev.filter((a) => !(a.numero === numero && a.fileira === fileira))
          : [...prev, { numero, fileira }] //Se o assento já estiver selecionado remove ele da lista "filter", caso ele não esteja, adiciona ele na lista
    );
  };

  const adicionarCarrinho = async () => {
    setCarregando(true);
    try {
      const clienteInteiro = localStorage.getItem("clienteLogado"); //Id do cliente que está logado
      const clienteParseId = clienteInteiro ? JSON.parse(clienteInteiro) : null; //Como o localStorage armazena um String completa, o parse vai dividir ele entre id, nome, etc...
      const clienteId = clienteParseId ? clienteParseId.id : null; //Se o clienteObjt existir, ele atribui o campo id ao clienteId

      if (!clienteId) {
        setMensagem("Você não está logado, logo não pode realizar a compra");
        setCarregando(false);
        return;
      }

      if (!sessaoSelecionada || !sessaoSelecionada.id) {
        setMensagem("Selecione uma sessão antes de reservar.");
        setCarregando(false);
        return;
      }

      const payloadAssentos = assentosSelecionados.map(
        ({ numero, fileira }) => ({
          //Percorre assentosSelecionados e manda isso aqui de baixo para o back, no caso ele retorna uma lista de assentos
          numero: numero.toString(),
          fileira,
          salaId: sessaoSelecionada.sala.id,
          sessaoId: sessaoSelecionada.id,
        })
      );
      console.log("Payload enviado:", payloadAssentos);
      console.log("clienteId:", clienteId);
      console.log("sessaoSelecionada:", sessaoSelecionada);

      const responseAssentos = await axios.post(
        "http://localhost:8080/api/assentos/reservar",
        payloadAssentos
      );

      const idsAssentos = responseAssentos.data.map((a) => a.id);

      const respostasIngressos = await Promise.all(
        idsAssentos.map((assentoId) =>
          axios.post("http://localhost:8080/api/ingressos/cadastrar", {
            tipo: tipoIngresso,
            preco,
            sessaoid: sessaoSelecionada.id,
            assentoid: assentoId,
            clienteid: clienteId,
            incluiOculos,
            taxaExtra3D,
          })
        )
      );

      const idsIngressos = respostasIngressos.map((res) => res.data.id);
      console.log("IDs válidos dos ingressos:", idsIngressos);

      const compraResponse = await axios.post(
        "http://localhost:8080/api/compras/realizar", //Cria a compra com o ingresso
        {
          cliente_id: clienteId,
          ingressos_ids: idsIngressos,
        }
      );

      const compraId = compraResponse.data.id;

      const pagamentoResponse = await axios.post(
        "http://localhost:8080/api/pagamentos/realizar", //Cria o pagamento vinculado a conta
        {
          compra_id: compraId,
          metodoPagamento: "CREDITO",
          status: "PENDENTE",
          dataHoraPagamento: new Date().toISOString(),
        }
      );

      localStorage.setItem(
        "compraInfo",
        JSON.stringify({
          compraId: compraId,
          valor: preco * assentosSelecionados.length,
          email: clienteParseId.email || "teste@email.com",
        })
      );

      /* const pagamentoId = pagamentoResponse.data.id;

      

      navigate("/CompraMercadoPago", {
        state: {
          compraId: compraId,
          valor: preco * assentosSelecionados.length,
          email: clienteParseId.email || "teste@email.com", // ou outro campo que você tenha salvo
        },
      }); */
      setAssentosSelecionados([]);
      atualizarAssentosReservados();

      setMensagem("Reserva realizada com sucesso!");
      setAssentosSelecionados([]); //Limpa os assentos selecionados
      atualizarAssentosReservados(); //Chama essa função para atualizar os assentos que estão ocupados
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao reservar assentos.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    setAssento(assentosSelecionados.map((a) => `${a.fileira}${a.numero}`));
    console.log("Assentos Selecionados:", assentosSelecionados);
  }, [assentosSelecionados]);

  useEffect(() => {
    setAssentosSelecionados([]); // Limpa os assentos selecionados ao trocar de sessão
  }, [sessaoSelecionada]);

  useEffect(() => {
    //Serve para limpar a mensagem depois de 3 segundos
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
            {assentos.map(({ numero, fileira }) => {
              // Procura o assento no array com status
              const assentoInfo = assentosReservados.find(
                (a) => a.numero === numero && a.fileira === fileira
              );

              const status = assentoInfo ? assentoInfo.status : "LIVRE";

              // Define flags para facilitar leitura
              const ocupado = status === "PAGO"; // Pago = vermelho, bloqueado
              const pendente = status === "PENDENTE"; // Pendente = amarelo, bloqueado

              const selecionado = assentosSelecionados.some(
                (a) => a.numero === numero && a.fileira === fileira
              ); //Verifica se o assento está selecionado

              return (
                <button
                  key={`${fileira}-${numero}`}
                  type="button"
                  onClick={() =>
                    !ocupado && !pendente && handleClick(numero, fileira)
                  } //Só chama handleClick se o assento n estiver ocupado
                  disabled={ocupado || pendente} //Se estiver ocupado desativa o botão
                  className={`w-14 h-14 text-xl flex items-center justify-center border-2 border-black p-2 rounded ${
                    ocupado
                      ? "bg-red-700 cursor-not-allowed" //Cor do botão se ele estiver ocupado
                      : pendente
                      ? "bg-yellow-500 cursor-not-allowed" //Cor do botão se ele estiver pendente
                      : selecionado
                      ? "bg-[#81318a]  cursor-pointer" //Cor do botão se ele for selecionado
                      : "bg-gray-800 hover:bg-gray-700  cursor-pointer" //Cor se ele estiver livre
                  }`}
                >
                  <MdOutlineEventSeat className="text-lg" />
                  {fileira}
                  {numero}

                  {/* Numero vai aparecer dentro do botão */}
                </button>
              );
            })}
          </div>
          {assentosSelecionados.length > 0 && (
            <div className=" ml-40 border-2 border-[#81318a] rounded p-10">
              <ul className="">
                {assentosSelecionados.map((a) => (
                  <li
                    className="text-gray-300"
                    key={`${a.fileira}-${a.numero}`}
                  >
                    Fileira <span className="text-[#b966c2]">{a.fileira}</span>{" "}
                    - Assento <span className="text-[#81318a]">{a.numero}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={carregando}
                onClick={adicionarCarrinho}
                className="w-full  bg-[#81318a] hover:bg-[#b966c2] text-white mt-6 py-2 px-4 rounded cursor-pointer"
              >
                {carregando ? "Reservando..." : "Adicionar no carrinho"}
              </button>
            </div>
          )}
        </div>
        {mensagem && (
          <p className="mt-6 text-center text-[#b966c2] font-semibold animate-fadeIn">
            {mensagem}
          </p>
        )}{" "}
        {/* Exibi uma mensagem que a gente colocou lá em cima */}
      </div>
    </div>
  );
}
