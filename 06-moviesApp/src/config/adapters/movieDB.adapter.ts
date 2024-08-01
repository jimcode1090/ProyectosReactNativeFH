import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '50eb0d2ebab4005f24a1d8101a02e163',
        api_key: THE_MOVIE_DB_KEY ?? 'no-key',
        language: 'es'
    }
})