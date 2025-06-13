import { Dropdown as DropdownFlowbite, DropdownItem } from "flowbite-react";


export default function Dropdown({ sessoes, setSessaoSelecionada }) {
  return (
    <DropdownFlowbite label="Escolher Sessão" dismissOnClick={true} className="bg-[#81318a] text-white font-semibold cursor-pointer rounded-md hover:bg-[#8a53a0de] border-none focus:outline-none">
      {sessoes && sessoes.length > 0 ? (
        sessoes.map((sessao) => (
          <DropdownItem
            key={sessao.id}
            onClick={() => {
              setSessaoSelecionada(sessao);
            }}

            className="bg-[#81318a] m text-white font-semibold border border-black cursor-pointer hover:bg-[#8a53a0de]"
          >
            Sala {sessao.sala.numero} -{" "}
            {new Date(sessao.horario).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </DropdownItem>
        ))
      ) : (
        <DropdownItem disabled>Nenhuma sessão disponível</DropdownItem>
      )}
    </DropdownFlowbite>
  );
}
