import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../header/Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //calling the fetch now playing movie hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        - Main container 
            - Video Background.
            - Video Title and desc
        - Secondary Container 
            - Movie list * rows
                - Cards * n.
        
       */}
    </div>
  );
};

export default Browse;
