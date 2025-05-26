import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div>
      <nav className="flex w-full h-20 bg-[#81318a] items-center px-6 justify-between text-white">
        <ul className="flex items-center gap-3">
          <li>
            {" "}
            <IoTicketOutline className="text-white text-4xl" />{" "}
          </li>
          <li className="  p-2 rounded-lg">
            <a className="hover:text-black transition delay-100 duration-300 ease-in rounded-full" href="/">
              Home
            </a>
          </li>
          <li className="  p-2 rounded-lg">
            <a className="hover:text-black" href="/filmes">
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

          <li>
            <a className="hover:text-black" href="/cadastrar">
              <CgProfile className="text-white text-4xl" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
