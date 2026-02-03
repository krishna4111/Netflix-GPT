import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import Header from "../header/Header";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  //calling the fetch now playing movie hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
