import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIE } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE, API_OPTIONS);
    const movieData = await data.json();
    dispatch(addNowPlayingMovies(movieData.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
