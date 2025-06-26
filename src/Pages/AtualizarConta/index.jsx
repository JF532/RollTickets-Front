import React from "react";
import UserForm from "../../Components/UserForm";
import { atualizarCliente } from "../../Controllers/api";

export default function AtualizarConta() {
  const clienteData = localStorage.getItem("clienteLogado");
  let id = null;
  let cpf =null;

  if (clienteData) {// pegando o id do cliente atraves do locastorage
    const cliente = JSON.parse(clienteData);
    id = cliente.id;
    cpf = cliente.cpf
    console.log("ID do cliente logado:", id);
  }

  async function updateAccount(dados) {
    try {
      const dadosAtualizados = {
        id: id,  
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
        cpf: cpf,
        telefone: dados.telefone,
      };

      const response = await atualizarCliente(dadosAtualizados);
      alert("Conta atualizada com sucesso!");

      // Atualizando o localStorage com os novos dados do cliente
      localStorage.setItem("clienteLogado", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      alert("Email já cadastrado");
    }
  }
  return (
    <div>
      <UserForm name="atualizar-conta" onUpdateAccount={updateAccount} />
    </div>
  );
}
