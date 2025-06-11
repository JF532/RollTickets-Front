import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SeatPicker(props) {
  const numero = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const [assentoSelecionado, setAssentoSelecionado] = useState([]);

  function handleClick(e) {
    const numero = e.target.value;
    setAssentoSelecionado((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
    props.setAssento(numero);
  }

  useEffect(() => {
    console.log("Assentos selecionados:", assentoSelecionado);
  }, [assentoSelecionado]);
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-900 rounded-md text-white grid grid-cols-5 gap-4">
      {numero.map((num) => (
        <button
          key={num}
          value={num}
          onClick={handleClick}
          className={`border p-2 rounded ${
            assentoSelecionado.includes(num.toString())
              ? "bg-green-600"
              : "bg-gray-800"
          } hover:bg-green-700 transition`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
