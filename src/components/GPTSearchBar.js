import { useRef } from "react";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {

  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {

      //Make an API call to Open AI and get movie suggestions
      const getQuery = "Act as a movie recommendation system and suggest some for the query " +  searchText.current.value + "only give me names of 5 movies, comma seperated like the expample result given ahead. Example Result: Gadar, Sholay "
      const gptResults = await openAI.responses.create({
        model: 'gpt-4o',
        //instructions: 'You are a coding assistant that talks like a pirate',
        input: getQuery,
      });
      const gptMovies = gptResults?.output_text.split(",");

      const promiseArray =gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
    
      dispatch(addGptMovieResult({movieNames: gptMovies, movieSuggestions: tmdbResults}));
  };

  //Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;

  };

  return(
      <div className="pt-[35%] flex justify-center md:pt-[10%] mx-2">
        <form 
          className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
          onSubmit={(e) => e.preventDefault()}>
            <input 
              ref = {searchText}
              className="p-4 m-4 col-span-9" type="text" 
              placeholder="What would you like to watch today ?" />
            <button
              className="p-2 bg-red-500 m-4 text-white rounded-lg col-span-3"
              onClick= {handleGptSearchClick}>Search</button>
        </form>
      </div>
    )
  }
  
  export default GPTSearchBar;