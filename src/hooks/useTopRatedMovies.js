import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies = () => {

    //Fetch Data from TMBD API and update store
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    },[]);

    const getTopRatedMovies = async () => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;