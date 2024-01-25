import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  // custom hoot for api call to get the list of now playing data
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondContainer />
    </div>
  );
};

export default Browse;
