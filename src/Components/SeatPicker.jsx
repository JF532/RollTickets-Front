import React, { useState, useEffect } from "react";

export default function SeatPicker({ capacidade, setAssento }) {
  // Gera array com números de 1 até a capacidade da sala
  const assentos = Array.from({ length: capacidade }, (_, i) => i + 1);

  const [assentosSelecionados, setAssentosSelecionados] = useState([]);

  const handleClick = (num) => {
    setAssentosSelecionados((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
    setAssento(num); // Se quiser passar só o último assento selecionado
  };

  useEffect(() => {
    console.log("Assentos Selecionados:", assentosSelecionados);
  }, [assentosSelecionados]);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 rounded-md text-white grid grid-cols-5 gap-4">
      {assentos.map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => handleClick(num)}
          className={`border p-2 rounded ${
            assentosSelecionados.includes(num)
              ? "bg-green-600"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
