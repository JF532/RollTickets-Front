import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useState } from "react";
import { login } from "../../Controllers/api";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await login(formData);
      alert("Login bem-sucedido!");
      console.log("Cliente:", response.data);
      localStorage.setItem("clienteLogado", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      alert("Email ou senha inválidos.");
    }
  }

  return (
    <div className="w-screen min-h-screen bg-gray-900 overflow-x-hidden flex justify-center items-center">
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Senha</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <div className="flex justify-center">
          <label className="mt-4 text-white flex gap-2" htmlFor="">
            Não tem conta ?
            <a
              className="hover:text-black transition delay-100 duration-300 ease-in underline decoration-1 "
              href="/cadastrar"
            >
              Cadastra-se
            </a>
          </label>
        </div>
      </Card>
    </div>
  );
}
