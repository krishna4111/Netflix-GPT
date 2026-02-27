import { useEffect } from "react";
import { API_OPTIONS, GET_VIDEO_BY_ID } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/movieSlice";

const useMovieTrailerById = ({ id }) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const fetchMovieById = async () => {
    const data = await fetch(`${GET_VIDEO_BY_ID}${id}/videos`, API_OPTIONS);

    const videoData = await data.json();

    const filterData = videoData.results.filter((video) => {
      return video.type === "Trailer";
    });

    const trailerData = filterData.length
      ? filterData[0]
      : videoData.results[0];

    dispatch(addTrailerVideo(trailerData));
  };

  useEffect(() => {
    if (!trailerVideo) fetchMovieById();
  }, []);
};
export default useMovieTrailerById;
