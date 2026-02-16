import { useRef } from "react";
import {
  API_OPTIONS,
  LOGIN_PAGE_BACKGROUND_IMAGE,
  SEARCH_MOVIE,
} from "../../utils/constants";
import lang from "../../utils/languageConstant";
import { useSelector } from "react-redux";
import openAiClient from "../../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../../utils/store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const languageSelected = useSelector((state) => state.config.lang);

  const searchText = useRef();

  const searchMovieTMDB = async ({ movieName }) => {
    const data = await fetch(`${SEARCH_MOVIE}${movieName}`, API_OPTIONS);
    const dataJson = await data.json();

    return dataJson.results;
  };

  const handleGptSearch = async () => {
    const text = searchText.current.value;

    const qptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      text +
      ". only give me names of 10 movies , comma separated like the example results given ahead. Example result : Sirai , Don , Saravanan irukka bayam yen , netru intru nalai , vinnal thanti varuvaya , nilavukku en mel ennadi kovam , kattrullapothey thootrikol";

    const response = await openAiClient.chat.completions.create({
      model: "gpt-5.2",
      messages: [{ role: "user", content: qptQuery }],
    });

    const gptMovies = response.choices[0]?.message?.content.split(",");

    //for each movie i will search from TMDB api.
    const movieDataPromises = gptMovies.map((name) => {
      return searchMovieTMDB({ movieName: name });
    });
    //The above method will return me an array of promises not actual results.

    const tmdbResults = await Promise.all(movieDataPromises);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <div>
        <img
          src={LOGIN_PAGE_BACKGROUND_IMAGE}
          alt="background-img"
          className="inset-0 h-full w-full object-cover -z-10 fixed"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9 "
          placeholder={lang[languageSelected].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 cursor-pointer"
        >
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
