import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function MeusIngressos() {
  const [ingressos, setIngressos] = useState([]); //Vai armazenar os ingressos da API

  //Essa função serve para converter o dataTime em um formato melhor e mais bonito
  const formatarDataHora = (dataHora) => {
    const data = new Date(dataHora);
    return (
      data.toLocaleDateString("pt-BR") +
      " " +
      data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  useEffect(() => {
    const clienteInteiro = localStorage.getItem("clienteLogado"); //Id do cliente que está logado
    const clienteParseId = clienteInteiro ? JSON.parse(clienteInteiro) : null; //Como o localStorage armazena um String completa, o parse vai dividir ele entre id, nome, etc...
    const clienteId = clienteParseId ? clienteParseId.id : null; //Se o clienteObjt existir, ele atribui o campo id ao clienteId

    if (!clienteId) {
      setMensagem("Você não está logado, logo não pode realizar a compra");
      setCarregando(false);
      return;
    }

    axios
      .get(`http://localhost:8080/api/ingressos/cliente/${clienteId}`) //Isso retorna os ingressos do cliente que está logado
      .then((response) => {
        setIngressos(response.data); //Atualiza o estado da constante criada lá em cima com os ingressos vindos do backend
      })
      .catch((error) => {
        setErro("Erro ao carregar ingressos...");
        console.error(error);
      });
  }, []);

  return (
    <div className="w-auto min-h-screen bg-gray-900 ">
      <NavBar />
      <div className="overflow-x-auto mt-20 p-15 ">
        <Table hoverable>
          <TableHead>
            <TableHeadCell className="rounded-tl-lg border-r-1 border-gray-500">
              Filme
            </TableHeadCell>
            <TableHeadCell className="border-r-1 border-gray-500">
              Sala
            </TableHeadCell>
            <TableHeadCell className="border-r-1 border-gray-500">
              Data e Horário
            </TableHeadCell>
            <TableHeadCell className="border-r-1 border-gray-500">
              Valor
            </TableHeadCell>
            <TableHeadCell className="border-r-1 border-gray-500">
              Fileira/Assento
            </TableHeadCell>
            <TableHeadCell className="rounded-tr-lg ">
              
            </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y ">
            {ingressos.length === 0 && ( //Se não tiver ingressos vai mostar isso 
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-400">
                  Você não possui ingressos comprados.
                </TableCell>
              </TableRow>
            )}
            {ingressos.map((ingresso) => ( //Percorre todos os ingressos do cliente e cria uma linha para cada um
              <TableRow key={ingresso.id} className="bg-gray-800 ">
                <TableCell className="whitespace-nowrap font-medium text-white  border-r-1 border-gray-500 ">
                  {ingresso.sessao.filme.titulo}
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">
                  {ingresso.sessao.sala.id}
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">
                  {formatarDataHora(ingresso.sessao.horario)}
                </TableCell>
                <TableCell className="border-r-1 border-gray-500">
                  R$ {ingresso.preco.toFixed(2)}
                </TableCell>

                <TableCell className="border-r-1 border-gray-500 ">
                  {ingresso.assento.fileira}
                  {ingresso.assento.numero}
                </TableCell>
                <TableCell className="">
                  {/* Aqui pode ter link para mostrar o QRCode, se tiver */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Footer />
    </div>
  );
}
