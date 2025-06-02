import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Menu from "./Menu";
import Avatar from "./Avatar";

export default function Navbar() {
  const [logado, setLogado] = useState(false);
  /* const [mostrarMenu, setMostrarMenu] = useState(false); */

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
              className="hover:text-black transition delay-100 duration-300 ease-in"
              href="/"
            >
              <IoTicketOutline className=" text-4xl" />{" "}
            </a>
          </li>
          <li className="  p-2 rounded-lg">
            <a
              className="hover:text-black transition delay-100 duration-300 ease-in"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="  p-2 rounded-lg">
            <a
              className="hover:text-black transition delay-100 duration-300 ease-in"
              href="/filmes"
            >
              Filmes e Horários
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-6">
          <div className="relative text-gray-600">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearch className="text-gray-400 text-lg" />
            </span>
            <input
              type="search"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 text-black"
              placeholder="Pesquisar filme"
            />
          </div>

          {!logado && (
            <li>
              <a
                className="hover:text-black transition delay-100 duration-300 ease-in"
                href="/login"
              >
                Entrar
              </a>
            </li>
          )}
          {!logado && (
            <li>
              <a
                className="hover:text-black transition delay-100 duration-300 ease-in"
                href="/cadastrar"
              >
                Cadastre-se
              </a>
            </li>
          )}

          {/* {logado && (
            <li>
              <button
                onClick={() => setMostrarMenu(!mostrarMenu)}
                className="hover:text-black transition delay-100 duration-300 ease-in cursor-pointer"
              >
                <CgProfile className="text-4xl" />
              </button>
            </li>
          )} */}
          {logado && <Avatar/>}
        </ul>
      </nav>
      {/* {logado && mostrarMenu && <Menu onClose={() => setMostrarMenu(false)} />} */}
    </div>
  );
}
