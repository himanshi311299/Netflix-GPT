import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
const usePopularMovies = () => {

    //Fetch Data from TMBD API and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    },[]);

    const getPopularMovies = async () => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;