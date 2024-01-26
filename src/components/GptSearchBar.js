import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../redux/slice/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const Language = useSelector((store) => store?.config?.Language);
  const searchedText = useRef();

  // search movie function
  const searchMovieTMDb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json()
    return json.results
  };
  const handleGptSearch = async () => {
    console.log("searchedText.current.value", searchedText?.current?.value);
    // make an Api Call to Gpt Api Get Movie Results

    const gptQuery =
      "Act as a movie Recommendation and suggest some movies for the query : " +
      searchedText?.current?.value +
      ", only give me names of 5 movies,comma seprated like the example results given ahead : Gadar ,Sholay,Don ,Golmal,Koi Mil Gaya ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("gptResukts", gptResults?.choices[0]?.message?.content);

    // This will give the movie list inside a array
    const GptMovies = gptResults?.choices[0]?.message?.content?.split(",");

    //for each movie i will search TMDB APi
     
    // this will return me a array of 5 promices becouse  searchMovieTMDb is async fuctin it takes time to fetch the data
    const  PromiseArr = GptMovies.map(movie =>searchMovieTMDb(movie))
    const Results = await Promise.all(PromiseArr)
    console.log('Results', Results)
    dispatch(addGptMovieResults({movieNames:GptMovies,movieResults:Results}))
  };
  return (
    <div className="pt-[12%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12  bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchedText}
          type="text"
          placeholder={lang[Language].placeholder}
          className="col-span-9 p-4 m-4  rounded-lg"
        />
        <button
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4 "
          onClick={handleGptSearch}
        >
          {lang[Language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
