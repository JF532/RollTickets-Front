import { Dropdown as DropdownFlowbite, DropdownItem } from "flowbite-react";

export default function Dropdown({ sessoes, setSessaoSelecionada }) {
  return (
    <DropdownFlowbite label="Escolher Sessão" dismissOnClick={true}>
      {sessoes && sessoes.length > 0 ? (
        sessoes.map((sessao) => (
          <DropdownItem
            key={sessao.id}
            onClick={() => {
              setSessaoSelecionada(sessao);
            }}
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
