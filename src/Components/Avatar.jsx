
import { Avatar as AvatarFlowbite, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import teste from "../IMG/Coringa.jpg"

export default function Avatar() {
    function handleLogout() {
    localStorage.removeItem("clienteLogado");
    window.location.href = "/";
  }
  return (
    <Dropdown
      label={<AvatarFlowbite alt="Foto do usuário" img={teste} rounded bordered color="gray"/>}
      arrowIcon={false}
      inline
    >
      <DropdownHeader className="">
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={handleLogout} name="sair">Sair</DropdownItem>
    </Dropdown>
  );
}
