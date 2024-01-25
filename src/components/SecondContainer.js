import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  const popularMovies = useSelector((store )=>store.movies)
  console.log('popularMovies', popularMovies)
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies?.popularMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
