import { useState } from "react";
import { criarUsuario } from "../../Controllers/api";
import NavBar from "../Navbar"

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
    <div className="w-screen min-h-screen bg-gray-900 overflow-x-hidden">
      <NavBar />

      <form onSubmit={handleSubmit}>
        <label style={{color: "white"}}>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label style={{color: "white"}}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={{color: "white"}}>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

        <label style={{color: "white"}}>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />

        <label style={{color: "white"}}>Telefone:</label>
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />

        <button type="submit" className="border-2" style={{color: "white"}}>Cadastrar</button>
      </form>

    </div>
  );
}

export default UserForm;
