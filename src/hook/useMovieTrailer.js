import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/slice/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer.key));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
