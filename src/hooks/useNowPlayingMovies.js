import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies = () => {

    //Fetch Data from TMBD API and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    },[]);

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;