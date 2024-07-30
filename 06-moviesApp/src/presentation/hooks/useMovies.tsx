import { useEffect, useState } from "react"
import { Movie } from "../../core/intities/movie.entity"
import * as UseCases from "../../core/use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {
    
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        console.log(nowPlayingMovies[0]);
        
    }
    


    return {
        nowPlaying,
        isLoading
    }
}
