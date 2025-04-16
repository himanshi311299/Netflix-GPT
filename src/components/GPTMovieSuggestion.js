import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  
    const {movieNames, movieSuggestions} = useSelector((store) => store.gpt);

    if(!movieNames) return null;

    return(
      <div>
        <div className="w-screen mt-20 bg-black bg-opacity-85 md:bg-opacity-95 overflow-x-hidden mx:0 md:mx-6  rounded-lg">
          {movieNames.map((movieName, index) => (
            <MovieList
              key= { movieName}
              title= { movieName }
              movies= { movieSuggestions[index] } />
          ))}
        </div>
          
      </div>
    )
  }
  
  export default GPTMovieSuggestion;