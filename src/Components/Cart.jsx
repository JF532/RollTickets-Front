import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Cart() {
  const [ingressos, setIngressos] = useState([]);

  const navigate = useNavigate();

  const formatarDataHora = (dataHora) => {
    const data = new Date(dataHora);
    return (
      data.toLocaleDateString("pt-BR") +
      " " +
      data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem("clienteLogado"));
    if (!cliente || !cliente.id) return;

    axios
      .get(`http://localhost:8080/api/ingressos/pendentes/${cliente.id}`)
      .then((res) => setIngressos(res.data))
      .catch((err) =>
        console.error("Erro ao buscar ingressos pendentes:", err)
      );
  }, []);

  const removerIngresso = (id) => {
    axios
      .delete(`http://localhost:8080/api/ingressos/${id}`)
      .then(() => {
        setIngressos((prev) => prev.filter((i) => i.id !== id));
      })
      .catch((err) => console.error("Erro ao remover ingresso:", err));
  };

  const calcularTotal = () => {
    return ingressos.reduce((acc, ingresso) => acc + ingresso.preco, 0);
  };

  const handlePagamento = () => {
    if (ingressos.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    const cliente = JSON.parse(localStorage.getItem("clienteLogado"));
    const compraId = ingressos[0]?.compra?.id;
    const email = cliente?.email || "email@exemplo.com";
    const valorTotal = calcularTotal();

    navigate("/CompraMercadoPago", {
      state: {
        compraId,
        valor: valorTotal,
        email,
      },
    });
  };

  return (
    <div>
      <div className=" text-white bg-gray-900 min-h-screen w-auto">
        <NavBar />
        <h1 className=" flex justify-center text-3xl font-bold mt-25 mb-6">
          Meu Carrinho
        </h1>
        <div className="flex flex-col justify-center p-10 text-center">
          {ingressos.length === 0 
          ? (
            <p className="text-gray-400">Nenhum ingresso pendente.</p>
          ) : (
            <>
              <div className="grid grid-cols-6 font-semibold text-[#b966c2] border-b pb-2 mb-4">
                <p>Filme</p>
                <p>Data/Hora</p>
                <p>Tipo</p>
                <p>Assento</p>
                <p>Preço</p>
                <p>Remover</p>
              </div>

              {ingressos.map((ingresso) => (
                <div
                  key={ingresso.id}
                  className="grid grid-cols-6 items-center border-b py-3"
                >
                  <p className="">
                    {ingresso.sessao?.filme?.titulo || "Filme"}
                  </p>
                  <p> {formatarDataHora(ingresso.sessao.horario)}</p>
                  <p>
                    <span
                      className={
                        ingresso.sessao.filme.formato === "TRES_D"
                          ? "text-white font-semibold whitespace-nowrap   border flex p-2 border-[#00000033] rounded-md bg-[#b61919d5] justify-center"
                          : "text-white font-semibold whitespace-nowrap   border flex p-2 border-[#1d2c8133] rounded-md bg-[#172b9bd5] justify-center"
                      }
                    >
                      {ingresso.sessao.filme.formato === "TRES_D" ? "3D" : "2D"}
                    </span>
                  </p>
                  <p>
                    {ingresso.assento?.fileira || "-"}
                    {ingresso.assento?.numero || "-"}
                  </p>
                  <p>R$ {(ingresso.preco || 0).toFixed(2)}</p>
                  <button
                    onClick={() => removerIngresso(ingresso.id)}
                    className=" bg-[#b61919d5]  hover:bg-red-700 p-2 flex justify-center rounded text-sm cursor-pointer hover:scale-3d"
                  >
                    Remover
                  </button>
                </div>
              ))}
               <div className="flex justify-center between-2">
            <div className="mt-6 text-xl font-bold text-[#b966c2]">
              Total: R$ {calcularTotal().toFixed(2)}
            </div>
            <button
              onClick={handlePagamento}
              className="mt-4 ml-10 px-6 py-2 bg-[#81318a] hover:bg-[#b966c2] text-white rounded cursor-pointer"
            >
              Pagar
            </button>
          </div>
            </>

            
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
