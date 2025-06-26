import axios from "axios";

export const criarUsuario = (dados) => {
  return axios.post("http://localhost:8080/api/clientes/cadastrar", dados);
};

export const login = (dados) => {
  return axios.post("http://localhost:8080/api/clientes/login", dados);
};

export function atualizarCliente(dados) {
  return axios.patch("http://localhost:8080/api/clientes", dados);
}