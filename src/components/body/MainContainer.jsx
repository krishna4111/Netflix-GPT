import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  //before even we feed the data to the store it is empty but our app rendered
  if (movies === null) return;

  const mainMovie = movies[0];

  const { id, title, overview } = mainMovie;

  return (
    <div className="relative h-screen w-full ">
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
