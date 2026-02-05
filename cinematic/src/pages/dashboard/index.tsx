
import { useEffect, useState } from "react";
import { MovieCard } from "@/interfaces/movie";
import { getDailyTrendingMovies } from "@/pages/api/movie";
import MainMovieCard from "@/components/MainMovieCard";

const Dashboard = () => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
  const fetchTrendingMovies = async () => {
    try {
      const data = await getDailyTrendingMovies();
      console.log("Data from TMDB:", data); // <--- check here
      
         // Map the trending movies to MovieCard format
        const movieCards: MovieCard[] = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          overview: movie.overview
        }));

        setMovies(movieCards);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch trending movies");
      setMovies([]); // fallback
    } finally {
      setLoading(false);
    }
  };

  fetchTrendingMovies();
}, []);


  // useEffect(() => {
  //   const fetchTrendingMovies = async () => {
  //     try {
  //       const data = await getDailyTrendingMovies();

  //       console.log("TMDB FULL RESPONSE:", data);
  //       console.log("RESULTS:", data?.results);

  //       setMovies(Array.isArray(data?.results) ? data.results : []);
  //     } catch (err) {
  //       console.error("FETCH ERROR:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrendingMovies();
  // }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {movies.length === 0 ? <p>No movies returned</p> :

      movies.map((movie) => (
        <MainMovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview} />
      ))}
    </div>
  );
};

export default Dashboard;

// import MainMovieCard from "@/components/MainMovieCard";
// import { useState, useEffect } from "react";
// import { getDailyTrendingMovies } from "@/pages/api/movie";
// import { MovieCard } from "@/interfaces/movie";

// const Dashboard: React.FC = () =>{
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState<MovieCard[]>([]);

//   useEffect(() =>{
//     const fetchTrendingMovies = async () => {
//       try{
//         const data = await getDailyTrendingMovies();
//         setMovies(data.results);
//         setLoading(false);
//       }catch(error){
//         console.error("Error fetching trending movies:", error);
//       }finally{
//         setLoading(false);
//       }
//   }
//   fetchTrendingMovies();
//   },[]);

//   return(
//     <>
//       <div>
//         <h1>Dashboard</h1>
//         <div>
//           {loading ? (
//             <p>Loading Movies...</p>
//           ) : (
//             movies.map((movie) => (
//               <MainMovieCard
//                 key={movie.id}
//                 id={movie.id} title={movie.title} poster_path={movie.poster_path} overview={movie.overview}
//               />
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   )
// }
// export default Dashboard;