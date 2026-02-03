import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <GptSearchBar />
      <GptMovieSuggestion />
      {/* Gpt Search bar and GPt Movie suggestion */}
    </div>
  );
};

export default GptSearch;
