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
export async function getMovieImages(){
    try{
        const response = await tmdbApi.get("/movie/{movie_id}/images");
        return response.data;
    }catch(error){
        console.error("Error fetching movie images:", error);
        throw error;}
}

//get all trending movies (by day)...
export async function getDailyTrendingMovies() {
    try{
        const response = await tmdbApi.get("/trending/movie/day");
        return response.data;
    }catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}

//get all trending movies (by week)...
export async function getWeeklyTrendingMovies() {
    try{
        const response = await tmdbApi.get("/trending/movie/week");
        return response.data;
    }catch(error){
        console.error("Error fetching trending movies:", error);
        throw error;
    }
}
