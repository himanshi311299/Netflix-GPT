import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";
import { BG_URL } from "../utils/constant";

const GPTSearchPage = () => {
  return(
    <div>
        <div className="fixed -z-10">
         <img className="h-screen w-screen object-cover"
              src = {BG_URL}
              alt = "backround-image of netflix" />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearchPage;