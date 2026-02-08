import { MovieListResponse, MovieImage, MovieKeywordItem } from "@/interfaces/movie";
import { tmdbApi } from "@/services/tmdb";

//get movie by id....
export async function getMovieByID(id: number) {
  try {
    
    const response = await tmdbApi.get(`/movie/${id}`);
    return response.data;

  } catch (error) {
    
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
}

//get movie images...
export async function getMovieImages(id: number):  Promise<MovieImage>{
    try{
        const response = await tmdbApi.get(`/movie/${id}/images`);
        return response.data;
    }catch(error){
        console.error("Error fetching movie images:", error);
        throw error;}
}

//get movie keywords...
export async function getMovieKeywords(id: number): Promise<MovieKeywordItem>{
    try{
        const response = await tmdbApi.get(`/movie/${id}/keywords`)
        return response.data;
    }catch(error){
        console.error("Error fetching movie keywords:", error);
        throw error;
    }
}

//get all trending movies (by day)...
export async function getDailyTrendingMovies(): Promise<MovieListResponse> {
    try{
        const response = await tmdbApi.get("/trending/movie/day");
        console.log("Trending Movies Response:", response.data);
        return response.data;
    }catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

//get all trending movies (by week)...
export async function getWeeklyTrendingMovies(): Promise<MovieListResponse> {
    try{
        const response = await tmdbApi.get("/trending/movie/week");
        return response.data;
    }catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}


