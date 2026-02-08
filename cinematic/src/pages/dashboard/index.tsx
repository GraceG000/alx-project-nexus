import { useEffect, useState } from 'react'
import { MovieCard } from '@/interfaces/movie'
import { getDailyTrendingMovies } from '@/pages/api/movie'
import MainMovieCard from '@/components/MainMovieCard'
import FeatureMovie from '@/components/FeatureMovie'
import { SidebarToggle } from '@/components/ui/SidebarToggle'

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
        h-[300px]
        bg-[url('/black-and-blue.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        relative
        flex justify-center items-center
      "
    >
     <div className='absolute top-5 left-5'>
      <SidebarToggle/>
      </div> 
    <div className=''>
    <input className='bg-white rounded-full px-4 py-2 border-none' placeholder='find your movies...'/>
    </div>  
    
      

    </div>

   {/* Movies Grid */}
    <div className="mt-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
)

}

export default Dashboard
