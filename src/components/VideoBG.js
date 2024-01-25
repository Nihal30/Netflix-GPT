import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hook/useMovieTrailer";

const VideoBG = ({ movieId }) => {
  //There are 2 ways to store the trailer data 1st is useState 2nd is redux

  const TrailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + TrailerVideo + "?autoplay=1 "}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBG;
