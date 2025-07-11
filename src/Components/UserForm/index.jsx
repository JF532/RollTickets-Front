import { useState } from "react";
import { criarUsuario } from "../../Controllers/api";

function UserForm(props) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    telefone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await criarUsuario(formData);
      console.log("Usuário criado:", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 overflow-x-hidden">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-45 p-6 bg-gray-800 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <label className="block text-white mb-1">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {props.name !== "atualizar-conta" && <div className="mb-4">
          <label className="block text-white mb-1">CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>}
        

        <div className="mb-6">
          <label className="block text-white mb-1">Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          {props.name === "atualizar-conta" ? (
            <button
            type="button"
              onClick={() => {
                props.onUpdateAccount(formData)
              }}
              className="px-6 py-2 bg-[#81318a] text-white font-semibold rounded-lg hover:bg-purple-700 transition cursor-pointer"
            >
              Atualizar Conta
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-[#81318a] text-white font-semibold rounded-lg hover:bg-purple-700 transition cursor-pointer" 
            >
              Cadastrar
            </button>
          )}
        </div>

        {props.name !== "atualizar-conta" && (
          <div className="flex justify-center">
            <label className="mt-10 text-white flex gap-2" htmlFor="">
              Tem conta ?
              <a
                className="hover:text-black transition delay-100 duration-300 ease-in underline decoration-1 "
                href="/login"
              >
                Entrar
              </a>
            </label>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserForm;
