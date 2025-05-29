import React from "react";

export default function Menu({ onClose }) {
  function handleLogout() {
    localStorage.removeItem("clienteLogado");
    window.location.href = "/login";
  }

  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg z-50 p-4">
      <button className="text-sm mb-4 text-right w-full" onClick={onClose}>
        ✕ Fechar
      </button>
      <ul className="flex flex-col gap-4">
        <li>
          <a href="/meus-ingressos">Meus Ingressos</a>
        </li>
        <li>
          <button onClick={handleLogout}>Sair</button>
        </li>
      </ul>
    </div>
  );
}
