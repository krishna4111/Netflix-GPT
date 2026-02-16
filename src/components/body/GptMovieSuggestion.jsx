import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gptSearchResults = useSelector((state) => {
    return state.gpt;
  });

  const { movieNames, movieResults } = gptSearchResults;

  if (!movieNames) {
    return null;
  }

  return (
    <div className="p-4 m-4 bg-black/80 text-white ">
      <div>
        {movieNames.map((movieName, index) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
