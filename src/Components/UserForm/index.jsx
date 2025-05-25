import { useState } from "react";
import { criarUsuario } from "../../Controllers/api";

function UserForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    telefone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await criarUsuario(formData);
      console.log("Usuário criado:", response.data);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <div className="h-full w-full bg-gray-500">

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />

        <label>Telefone:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />

        <button type="submit" className="border-2">Cadastrar</button>
      </form>

    </div>

  );
}

export default UserForm;
