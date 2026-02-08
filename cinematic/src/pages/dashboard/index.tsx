import { useEffect, useState } from 'react'
import { MovieCard } from '@/interfaces/movie'
import { getDailyTrendingMovies } from '@/pages/api/movie'
import MainMovieCard from '@/components/MainMovieCard'
import FeatureMovie from '@/components/FeatureMovie'

const Dashboard = () => {
  const [movies, setMovies] = useState<MovieCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getDailyTrendingMovies()
        console.log('Data from TMDB:', data) // <--- check here

        // Map the trending movies to MovieCard format
        const movieCards: MovieCard[] = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          overview: movie.overview
        }))

        setMovies(movieCards)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch trending movies')
        setMovies([]) // fallback
      } finally {
        setLoading(false)
      }
    }

    fetchTrendingMovies()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
  <div>
    {/* Background / Hero Section */}
    <div
      className="
        h-[500px]
        bg-[url('/black-and-blue.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        relative
      "
    >
      <div className="absolute inset-0  z-10" />

      {/* <div className="relative p-8 h-full flex items-end">
        {movies.length > 0 && (
          <FeatureMovie
            id={movies[0].id}
            title={movies[0].title}
            poster_path={movies[0].poster_path}
            overview={movies[0].overview}
          />
        )}
      </div> */}

       {/* Movies Grid */}
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map(movie => (
        <MainMovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      ))}
    </div>

    </div>

  
  </div>
)

}

export default Dashboard
