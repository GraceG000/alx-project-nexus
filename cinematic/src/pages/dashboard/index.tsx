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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getDailyTrendingMovies()
        console.log('Data from TMDB:', data)

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
        setMovies([])
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
          flex flex-col justify-center items-center
        "
      >
        <div className='absolute top-5 left-5'>
          <SidebarToggle/>
        </div> 

        <h1 className='text-white text-[3rem]'>Dashboard</h1>
        
        <div className="w-full max-w-md px-4">
          <input
            type="text"
            placeholder="Search movies..."
            className="input input-bordered w-full bg-white py-2 px-8 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className="text-sm text-gray-500 mt-4 px-8">
          Showing {filteredMovies.length} of {movies.length} movies
        </p>
      )}

      {/* Movies Grid */}
      <div className="mt-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MainMovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            No movies found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard