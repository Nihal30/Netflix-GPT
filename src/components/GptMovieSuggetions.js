import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gptSearch);
  const { MovieName, MovieResults } = gpt;

  if (!MovieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {MovieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={MovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
