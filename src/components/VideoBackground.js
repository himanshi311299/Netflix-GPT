import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

    return (
       <div className="overflow-hidden">
        <iframe 
        className="w-screen aspect-video scale-[1.4]"
        src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0"
          }
        ></iframe>
       </div>
    )
};

export default VideoBackground;