import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggetions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-20">
        <img
          src={BG_IMG}
          alt="LoginBg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
