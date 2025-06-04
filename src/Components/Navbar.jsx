import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Menu from "./Menu";

export default function Navbar() {
  const [logado, setLogado] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);

  useEffect(() => {
    const cliente = localStorage.getItem("clienteLogado");
    if (cliente) setLogado(true);
  }, []);

  return (
    <div>
      <nav className="flex w-full h-20 bg-[#81318a] items-center px-6 justify-between text-white">
        <ul className="flex items-center gap-3">
          <li>
            {" "}
            <a
              className="hover:text-gray-300 transition delay-100 duration-300 ease-in"
              href="/"
            >
              <IoTicketOutline className=" text-4xl" />{" "}
            </a>
          </li>
          <li className="  p-2 rounded-lg">
            <a
              className="hover:text-gray-300 transition delay-100 duration-300 ease-in"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="  p-2 rounded-lg">
            <a
              className="hover:text-gray-300 transition delay-100 duration-300 ease-in"
              href="/filmes"
            >
              Filmes e Horários
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <div className="flex items-center relative max-w-[190px]">
            <IoSearch className="absolute left-4 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Pesquisar filme"
              className="w-full h-10 pl-10 pr-4 rounded-full border-2 border-transparent
            bg-[#f3f3f4] text-[#0d0c22] placeholder-[#9e9ea7]
            transition duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-purple-500/40
            hover:border-purple-500/30 focus:bg-white hover:bg-white focus-visible:outline-none"
            />
          </div>


          {!logado && (
            <li>
              <a
                className="hover:text-gray-300 transition delay-100 duration-300 ease-in"
                href="/login"
              >
                Entrar
              </a>
            </li>
          )}
          {!logado && (
            <li>
              <a
                className="hover:text-gray-300 transition delay-100 duration-300 ease-in"
                href="/cadastrar"
              >
                Cadastre-se
              </a>
            </li>
          )}

          {logado && (
            <li>
              <button
                onClick={() => setMostrarMenu(!mostrarMenu)}
                className="hover:text-gray-300 transition delay-100 duration-300 ease-in cursor-pointer"
              >
                <CgProfile className="text-4xl" />
              </button>
            </li>
          )}
        </ul>
      </nav>
      {logado && mostrarMenu && <Menu onClose={() => setMostrarMenu(false)} />}
    </div >
  );
}
