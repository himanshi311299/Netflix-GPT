import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {

    return(
        <div className="px-6 overflow-hidden">
            <h1 className="text-2xl text-white font-bold py-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-none">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key= {movie.id} posterPath={movie.poster_path} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
};

export default MovieList;