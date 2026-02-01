import useMoviesAndTvShows from "../../hooks/useMoviesAndTvShows";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  useMoviesAndTvShows();

  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies,
  );
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const PopularMovies = useSelector((state) => state.movies.PopularMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="bg-black ">
      <div className="-mt-52 relative px-10 z-100">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={PopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
