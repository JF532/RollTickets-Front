import { Card as CardFlowbite } from "flowbite-react";
import "../index.css";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

export default function Card({ movie }) {



  return (
    <CardFlowbite
      className="max-w-sm m-4 flex flex-col justify-between p-4 bg-gray-800 shadow-lg"
      renderImage={() => (
        <img
           src={movie.imageUrl}
          alt={movie.titulo}
          className="rounded w-full"
        />
      )}
    >
      <div className="flex flex-col justify-between flex-grow gap-4">
       
        <h5 className="text-2xl font-bold tracking-tight text-gray-100">
           {movie.titulo}
        </h5>

   
        <p className="font-normal text-gray-400 h-24 overflow-y-auto Scroll">
             {movie.sinopse}
        </p>

          {/* Estrelas sempre na mesma posição */}
        <div className="mt-auto">
          <Rating valor={movie.avaliacao} />
        </div>  
      </div>

      <div className="pt-4">
       
         
       
      </div>
    </CardFlowbite>
  );
}
