import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { useDispatch } from "react-redux";

import {
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} from "../utils/store/movieSlice";

const useMoviesAndTvShows = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const popularMovieData = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const topRatedMoviesData = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const upcomingMoviesData = await fetch(POPULAR_MOVIES, API_OPTIONS);

    const popularMovies = await popularMovieData.json();
    const topRatedMovies = await topRatedMoviesData.json();
    const upcomingMovies = await upcomingMoviesData.json();

    dispatch(addPopularMovies(popularMovies.results));
    dispatch(addTopRatedMovies(topRatedMovies.results));
    dispatch(addUpcomingMovies(upcomingMovies.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};

export default useMoviesAndTvShows;
