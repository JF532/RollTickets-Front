import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { LuTicket } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { RiAccountBox2Line } from "react-icons/ri"

export default function Menu({ onClose }) {
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const dados = localStorage.getItem("clienteLogado");
    if (dados) {
      setCliente(JSON.parse(dados));
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("clienteLogado");
    window.location.href = "/";
  }

  return (
    <div className="absolute top-20 right-0 h-auto w-64 bg-white text-gray-300 shadow-lg z-50 rounded-full ">
      <Sidebar aria-label="Default sidebar example" className="p-0">
        <SidebarItems>
          <SidebarItemGroup className="border-none ">
            <div className="flex flex-col gap-3">
              <span className=" text-purple-300">
                <span className="text-gray-300">Usuário:</span> {cliente?.nome}
              </span>
              <span className="text-purple-300">
                <span className="text-gray-300">Email:</span> {cliente?.email}
              </span>
            </div>

            <SidebarItem
              className="hover:text-purple-300 transition delay-100 duration-300 ease-in "
              href="/meus-ingressos"
              icon={LuTicket}
            >
              Meus Ingressos
            </SidebarItem>

            <SidebarItem icon={RiAccountBox2Line}
            href="/minha-conta">
              Atualizar Conta
            </SidebarItem>

            <SidebarItem
              onClick={handleLogout}
              icon={CiLogout}
              className="hover:text-purple-300 transition delay-100 duration-300 ease-in cursor-pointer"
            >
              Sair
            </SidebarItem>

          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}
