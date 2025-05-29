import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { LuTicket } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";

export default function Menu({ onClose }) {
  function handleLogout() {
    localStorage.removeItem("clienteLogado");
    window.location.href = "/";
  }

  return (
    <div className="fixed top-20 right-0 h-auto w-64 bg-white text-black shadow-lg z-50 rounded-full ">
       <Sidebar aria-label="Default sidebar example" className="p-0">
      <SidebarItems>
        <SidebarItemGroup className="border-none ">
          <SidebarItem href="#" icon={LuTicket}>
            Meus Ingressos
          </SidebarItem>

          <SidebarItem  onClick={handleLogout} icon={CiLogout} className="cursor-pointer">
            Sair
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    </div>
  );
}
