import useMovieTrailerById from "../../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailerById({ id: movieId });

  const trailer = useSelector((state) => state.movies.trailerVideo);

  if (trailer === null) return;

  const { key } = trailer;
  return (
    <div className="absolute inset-0">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?si=7OAMp-G77Ay-jiYD&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
