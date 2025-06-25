import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [ingressos, setIngressos] = useState([]);

  const navigate = useNavigate();

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
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Meu Carrinho</h1>

      {ingressos.length === 0 ? (
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
              <p>{ingresso.sessao?.filme?.titulo || "Filme"}</p>
              <p>{ingresso.sessao?.horario || "Sessão"}</p>
              <p>{ingresso.tipo || "Tipo"}</p>
              <p>
                {ingresso.assento?.fileira || "-"}
                {ingresso.assento?.numero || "-"}
              </p>
              <p>R$ {(ingresso.preco || 0).toFixed(2)}</p>
              <button
                onClick={() => removerIngresso(ingresso.id)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
              >
                Remover
              </button>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold text-[#b966c2]">
            Total: R$ {calcularTotal().toFixed(2)}
          </div>
          <button
            onClick={handlePagamento}
            className="mt-4 px-6 py-2 bg-[#81318a] hover:bg-[#b966c2] text-white rounded"
          >
            Pagar
          </button>
        </>
      )}
    </div>
  );
}
