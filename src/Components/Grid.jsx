import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

export default function Grid(props) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Se o componente recebeu filmes via props n vai fazer outro tipo de requisição
    if (props.filmes) {
      setFilmes(props.filmes);
      return;
    }

    
    if (props.name === "FilmesHorarios") {
      axios
        .get(props.url)
        .then((response) => {
          setFilmes(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar filmes do backend", error);
        });
    } else if (props.name === "Home") {
      axios({
        method: "get",
        url: props.url,
        params: {
          api_key: "156d2e5ce1b6c6c0fe56949f263204e1",
          language: "pt-BR",
          region: "br",
        },
      })
        .then((response) => {
          setFilmes(response.data.results);
        })
        .catch((error) => {
          console.error(
            "Erro ao buscar filmes da TMDB:",
            error.response || error.message
          );
        });
    }
  }, [props.url, props.name, props.filmes]);

  return (
    <div>
      <div className="flex justify-center mt-20 items-center">
        <h1
          className="font-icarubrik text-white text-5xl"
          style={{ fontFamily: "'ICA Rubrik', sans-serif" }}
        >
          {props.header}
        </h1>
      </div>

      <div className="flex justify-center mt-20 items-center">
        <div className="grid grid-cols-3 gap-4">
          {filmes.map((movie) => (
            <Card key={movie.id} movie={movie} name={props.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
