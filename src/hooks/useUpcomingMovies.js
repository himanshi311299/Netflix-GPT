import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
const useUpcomingMovies = () => {

    //Fetch Data from TMBD API and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getUpcomingMovies();
    },[]);

    const getUpcomingMovies = async () => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;