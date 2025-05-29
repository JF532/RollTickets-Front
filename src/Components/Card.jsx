import { Card as CardFlowbite } from "flowbite-react";
import teste from "../IMG/Coringa.jpg";
import "../index.css";

export default function Card({ movie }) {
  return (
    <div>
      <CardFlowbite
        className="max-w-sm m-4 h-200"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="image 1"
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-400 ">
          {movie.title}
        </h5>
        <p className="font-normal text-gray-500 h-24 overflow-y-scroll Scroll">
          {movie.overview}
        </p>
      </CardFlowbite>
    </div>
  );
}
