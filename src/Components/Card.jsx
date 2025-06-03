import { Card as CardFlowbite } from "flowbite-react";
import "../index.css";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

export default function Card({ movie, name }) {
  const cartaz = name === "FilmesHorarios"; //Atribui um boolean em relação a 'FilmesHoraios', onde se você estiver na página 'FilmesHoraios' ele vai executar um card diferente 

  return (
    <CardFlowbite
      className="max-w-sm m-4 flex flex-col justify-between p-4 bg-gray-800 shadow-lg"
      renderImage={() => (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          className="rounded-t w-full"
        />
      )}
    >
      <div className="flex flex-col justify-between flex-grow gap-4">
       
        <h5 className="text-2xl font-bold tracking-tight text-gray-100">
          {movie.title}
        </h5>

   
        <p className="font-normal text-gray-400 h-24 overflow-y-auto Scroll">
          {movie.overview}
        </p>

        {/* Estrelas sempre na mesma posição */}
        <div className="mt-auto">
          <Rating valor={movie.vote_average} />
        </div>
      </div>

      <div className="pt-4">
        {cartaz ? (
          <Link
            to={`/`}
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
