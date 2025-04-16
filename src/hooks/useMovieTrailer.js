import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {

    //Fetch trailer video & updating the store with trailer video data
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieTrailer();
    }, []);

    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
    
        const filterTrailerData = json?.results?.filter((video) => video?.type === "Trailer");
        const trailer = filterTrailerData?.length ? "filterTrailerData[0]" : json?.results[0];
        dispatch(addTrailerVideo(trailer));

    } 
}

export default useMovieTrailer;