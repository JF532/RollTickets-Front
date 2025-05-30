import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

export default function Grid() {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: {
        api_key: "156d2e5ce1b6c6c0fe56949f263204e1",
        language: "pt-BR",
        region: "BR",
      },
    }).then((response) => {
      setFilmes(response.data.results);
      console.log(response.data.results);
    });
  };


  
  useEffect(() => {
    //Com o useEffect só vai ser chamada uma vez
    getFilmes();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-20 items-center">
        <div class="grid grid-cols-3 gap-4">
          {filmes.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
