import { MOVIE_IMAGE_BASE_URL } from "../../utils/constants";

const MovieCard = ({ movieData }) => {
  return (
    <div className="w-60 shrink-0 relative">
      <img
        className="p-2"
        alt="movie-poster"
        src={`${MOVIE_IMAGE_BASE_URL}${movieData.backdrop_path}`}
      ></img>
      <div className="absolute bottom-2 left-0 w-full flex justify-center">
        <p
          className="text-yellow-600 text-sm font-semibold
                      bg-black/60 px-2 py-1 rounded-md
                      text-center"
        >
          {movieData.title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
