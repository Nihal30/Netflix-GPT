import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.js";
import VideoBG from "./VideoBG.js";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // early return
  if (!movies) return;
  
  const mainMovie = movies[0];
  
  const {original_title,overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle overview={overview} original_title={original_title}   />
      <VideoBG  movieId ={id}/>
    </div>
  );
};

export default MainContainer;
