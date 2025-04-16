import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="m-0 md:-mt-44 z-40 md:pl-6 pl-0 relative">
                <MovieList title = {"Now Playing"}  movies = {movies.nowPlayingMovies} />
                <MovieList title = {"Top Rated"}  movies = {movies.topRatedMovies} />
                <MovieList title = {"Popular"}  movies = {movies.popularMovies} />
                <MovieList title = {"Upcoming"}  movies = {movies.upcomingMovies} />
            </div>
            
        </div>
        
        

        


    )
};

export default SecondaryContainer;