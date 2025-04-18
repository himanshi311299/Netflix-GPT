import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div className= "overflow-x-hidden">
            <Header />
            { showGptSearch ? <GPTSearch />:
            <div className= 'flex flex-col'>
                 <MainContainer />
                 <SecondaryContainer />
            </div>
            } 
        </div>
        
    )
};

export default Browse;