import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) return;

  return (
    <div className="border-white">
      <div>
        <h1 className="font-bold p-0 pl-2 pt-4 text-2xl text-white">{title}</h1>
      </div>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {movies.map((movie) => {
          return (
            <>
              <MovieCard key={movie.id} movieData={movie} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
