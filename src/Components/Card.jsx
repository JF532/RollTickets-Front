import { Card as CardFlowbite } from "flowbite-react";
import "../index.css";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

export default function Card({ movie, name }) {
  const cartaz = name === "FilmesHorarios"; //Atribui um boolean em relação a 'FilmesHoraios', onde se você estiver na página 'FilmesHoraios' ele vai executar um card diferente
  const filmesPesquisados = name ==="FilmesPesquisados";
  const TMDB = name === "Home";

  const titulo = TMDB ? movie.title : movie.titulo;
  const sinopse = TMDB ? movie.overview : movie.sinopse;
  const PathImage = TMDB
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movie.imageUrl;
  const avaliacao = TMDB ? movie.vote_average : movie.avaliacao;
  return (
    <CardFlowbite
      className="max-w-sm m-4 flex flex-col justify-between p-4 bg-gray-800 shadow-lg"
      renderImage={() => (
        <img src={PathImage} alt={titulo} className="rounded w-full" />
      )}
    >
      <div className="flex flex-col justify-between flex-grow gap-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-100">
          {titulo}
        </h5>

        <p className="font-normal text-gray-400 h-24 overflow-y-auto Scroll">
          {sinopse}
        </p>

        {/* Estrelas sempre na mesma posição */}
        <div className="mt-auto">
          <Rating valor={avaliacao} />
        </div>
      </div>

      <div className="pt-4">
        {cartaz || filmesPesquisados ? (
          <Link
            to={`/compra/${movie.id}`}
            className="block text-center w-full py-2 bg-[#81318a] text-[#c5b8bc] font-semibold rounded hover:bg-[#81318abd] transition"
          >
            Comprar
          </Link>
        ) : (
          <button
            className="w-full py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition"
            disabled
          >
            Indisponível
          </button>
        )}
      </div>
    </CardFlowbite>
  );
}
