import { Card as CardFlowbite } from "flowbite-react";
import teste from "../IMG/Coringa.jpg";
import "../index.css";
import Rating from "../Components/Rating";

export default function Card({ movie }) {
  return (
    <div>
      <CardFlowbite
        className="max-w-sm m-4 h-208"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="image 1"
          />
        )}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-400 ">
              {movie.title}
            </h5>
          </div>

          <div>
            <p className="font-normal text-gray-500 h-24 overflow-y-scroll Scroll">
              {movie.overview}
            </p>
          </div>

          <div>
            <p className="font-normal text-gray-500 h-2 ">
              <Rating valor={movie.vote_average} />
            </p>
          </div>
        </div>
      </CardFlowbite>
    </div>
  );
}
