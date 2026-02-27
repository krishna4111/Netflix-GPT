import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

import {
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
} from "../utils/store/movieSlice";

const useMoviesAndTvShows = () => {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movies);

  const { topRatedMovies, popularMovieData, upcomingMovies } = movies;

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
    if (!topRatedMovies || !popularMovieData || !upcomingMovies) fetchMovies();
  }, []);
};

export default useMoviesAndTvShows;
