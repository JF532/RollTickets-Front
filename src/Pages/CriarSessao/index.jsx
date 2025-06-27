import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import {
  buscarTodosOsFilmes,
  buscarTodasAsSalas,
  buscarTodasAsSessoes,
  criarSessao,
} from "../../Controllers/api";
import Footer from "../../Components/Footer";

export default function CriarSessao() {
  const [filmesCadastrados, setFilmesCadastrados] = useState([]);
  const [salasCadastradas, setSalasCadastradas] = useState([]);
  const [sessoesCadastradas, setSessoesCadastradas] = useState([]);

  useEffect(() => {
    buscarTodosOsFilmes()
      .then((res) => {
        setFilmesCadastrados(res.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar filmes cadastrados ", error);
      });

    buscarTodasAsSalas()
      .then((res) => {
        setSalasCadastradas(res.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar as salas cadastradas ", error);
      });

    buscarTodasAsSessoes()
      .then((res) => {
        setSessoesCadastradas(res.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar as sessoes cadastradas ", error);
      });
  }, []);

  /* useEffect(() => {
    console.log(filmesCadastrados);
    console.log(salasCadastradas);
    console.log(sessoesCadastradas);
  }, [filmesCadastrados, salasCadastradas, sessoesCadastradas]); */

  // capturando os dados das opções para criar uma sessao
  const [idfilmeSessao, setIdFilmeSessao] = useState("");
  const [idsalaSessao, setIdSalaSessao] = useState("");
  const [dataHoraSessao, setDataHoraSessao] = useState("");

  function handleCriarSessao() {
    if (!idfilmeSessao || !idsalaSessao || !dataHoraSessao) {
      alert("Preencha todos os campos antes de criar a sessão.");
      return;
    }
    const payload = {
      filmeId: Number(idfilmeSessao),
      salaId: Number(idsalaSessao),
      horario: dataHoraSessao,
    };

    criarSessao(payload)
      .then((res) => {
        alert("Sessão criada com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao criar sesão: ", error);
      });
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Coluna da criação */}
          <div className="w-full lg:w-1/2 bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Criar Sessão</h2>

            <div className="mb-4">
              <label className="block mb-1">Filme:</label>
              <select
                value={idfilmeSessao}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
                onChange={(e) => {
                  setIdFilmeSessao(e.target.value);
                }}
              >
                <option value="">Selecione um filme</option>
                {filmesCadastrados?.map((filme) => {
                  return (
                    <option key={filme.id} value={filme.id}>
                      {filme.titulo}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Sala:</label>
              <select
                value={idsalaSessao}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
                onChange={(e) => {
                  setIdSalaSessao(e.target.value);
                }}
              >
                <option value="">Selecione uma sala</option>
                {salasCadastradas?.map((sala) => {
                  return (
                    <option key={sala.id} value={sala.id}>
                      {sala.numero}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Data e Hora:</label>
              <input
                value={dataHoraSessao}
                type="datetime-local"
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
                onChange={(e) => {
                  setDataHoraSessao(e.target.value);
                }}
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold"
              onClick={handleCriarSessao}
            >
              Criar Sessão
            </button>
          </div>

          {/* Coluna da tabela */}
          <div className="w-full lg:w-1/2 bg-gray-800 rounded-lg p-6 overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">Sessões Existentes</h2>
            <table className="w-full border border-gray-700 text-sm">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-2 border border-gray-600">ID</th>
                  <th className="p-2 border border-gray-600">Filme</th>
                  <th className="p-2 border border-gray-600">Sala</th>
                  <th className="p-2 border border-gray-600">Data e Hora</th>
                  <th className="p-2 border border-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody>
                {sessoesCadastradas.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center p-4 border border-gray-700"
                    >
                      Nenhuma sessão cadastrada
                    </td>
                  </tr>
                ) : (
                  sessoesCadastradas.map((sessao) => (
                    <tr key={sessao.id}>
                      <td className="p-2 border border-gray-600">
                        {sessao.id}
                      </td>
                      <td className="p-2 border border-gray-600">
                        {sessao.filme?.titulo || "—"}
                      </td>
                      <td className="p-2 border border-gray-600">
                        {sessao.sala?.numero || "—"}
                      </td>
                      <td className="p-2 border border-gray-600">
                        {new Date(sessao.horario).toLocaleString()}
                      </td>
                      <td className="p-2 border border-gray-600">
                        {/* botão para excluir uma sessao */}
                        <button className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white text-sm">
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
