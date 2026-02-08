import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Movie,
  MovieImage,
  MovieImageItem,
  MovieKeywordItem
} from '@/interfaces/movie'
import {
  getMovieByID,
  getMovieImages,
  getMovieKeywords
} from '@/pages/api/movie'
import Image from 'next/image'

const MovieDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const [movie, setMovie] = useState<Movie | null>(null)
  const [movieImages, setMovieImages] = useState<MovieImage | null>(null)
  const [movieKeywords, setMovieKeywords] = useState<MovieKeywordItem | null>(
    null
  )
  const [loadingMovie, setLoadingMovie] = useState(true)
  const [loadingImages, setLoadingImages] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'backdrops' | 'posters' | 'logos'>(
    'backdrops'
  )

  useEffect(() => {
    if (!id) return

    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieByID(Number(id))
        setMovie(data)
        console.log('Movie Details:', data)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch movie details')
      } finally {
        setLoadingMovie(false)
      }
    }
    fetchMovieDetails()
  }, [id])

  useEffect(() => {
    if (!id) return

    const fetchMovieImages = async () => {
      try {
        const data = await getMovieImages(Number(id))
        setMovieImages(data)
        console.log('Movie Images:', data)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch movie images')
      } finally {
        setLoadingImages(false)
      }
    }
    fetchMovieImages()
  }, [id])

  useEffect(() => {
    if (!id) return

    const fetchMovieKeywords = async () => {
      try {
        const data = await getMovieKeywords(Number(id))
        setMovieKeywords(data)
        console.log('Movie Images:', data)
      } catch (error) {
        console.error(error)
        setError('Failed to fetch movie images')
      } finally {
        setLoadingImages(false)
      }
    }
    fetchMovieKeywords()
  }, [id])

  if (loadingMovie) return <div className='p-8'>Loading...</div>
  if (error) return <div className='p-8 text-red-500'>{error}</div>
  if (!movie) return <div className='p-8'>Movie not found</div>

  return (
    <>
      <div className='grid grid-rows-[1fr_2fr] gap-4 md:grid-rows-[1fr_2fr] md:gap-4 lg:grid-rows-[95vh_1fr] lg:gap-4 py-8 px-8'>
        {/*Image and genral information section...*/}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[400_1fr]'>
          {/*movie poster and overview section...*/}
          <div className='w-full md:h-[101vh] lg:h-[full]'>
            <Image
              src={
                movie.poster_path
                  ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`
                  : '/placeholder.png'
              }
              alt={`${movie.title} Poster`}
              width={400}
              height={400}
              className='object-contain rounded-lg'
            />
          </div>
          <div className='h-full'>
            {/*Overview...*/}
            <div>
              <h3 className='font-bold mb-2'>Overview</h3>
              {movie.overview}
            </div>
            {/*Genres displayed as chips...*/}
            <div className='mt-4'>
              <h3 className='font-bold mb-2'>Genres</h3>
              <div className='flex flex-wrap gap-2'>
                {movie.genres && movie.genres.length > 0 ? (
                  movie.genres.map(genre => (
                    <span
                      key={genre.id}
                      className='px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium'
                    >
                      {genre.name}
                    </span>
                  ))
                ) : (
                  <span className='text-gray-500 text-sm'>
                    No genres available
                  </span>
                )}
              </div>
            </div>

            {/*Run-time...*/}
            <div className='flex flex-wrap justify-start gap-2'>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Runtime</h3>
                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.runtime} minutes
                </span>
              </div>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Status</h3>

                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.status}
                </span>
              </div>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Release Date</h3>

                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.release_date}
                </span>
              </div>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Popularity</h3>
                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.popularity}
                </span>
              </div>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Vote Average</h3>
                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.vote_average}
                </span>
              </div>
              <div>
                <h3 className='font-bold mb-2 mt-4'>Vote Count</h3>

                <span className='px-3 py-1 bg-blue-400 text-white rounded-full text-sm font-medium'>
                  {movie.vote_count}
                </span>
              </div>
            </div>

            <div>
              <h3 className='font-bold mb-2 mt-4'>Keywords</h3>
              <div className='flex flex-wrap justify-start gap-2 sm:flex-wrap'>
                {movieKeywords?.keywords &&
                movieKeywords.keywords.length > 0 ? (
                  movieKeywords.keywords.map(keyword => (
                    <span
                      key={keyword.id}
                      className='px-3 py-1 border-2 border-solid border-blue-800 bg-white text-blue-800 rounded-full text-sm font-medium'
                    >
                      {keyword.name}
                    </span>
                  ))
                ) : (
                  <span className='text-gray-500 text-sm'>
                    No keywords available
                  </span>
                )}
              </div>
            </div>

            <div className='mt-4'>
              <button className='bg-green-200 text-green-800 py-2 px-4 rounded-full cursor-pointer'>
                Add to favorites
              </button>
            </div>
          </div>
        </div>

        {/* Movie Images Section */}
        <div>
          {movieImages && (
            <div className='mt-8'>
              <h2 className='text-2xl font-bold mb-4'>Movie Images</h2>

              {/* Tabs */}
              <div className='flex gap-2 mb-4 border-b border-gray-200'>
                <button
                  onClick={() => setActiveTab('backdrops')}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'backdrops'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Backdrops ({movieImages.backdrops?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('posters')}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'posters'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Posters ({movieImages.posters?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('logos')}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === 'logos'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Logos ({movieImages.logos?.length || 0})
                </button>
              </div>

              {/* Image Grid - Backdrops */}
              {activeTab === 'backdrops' && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {movieImages.backdrops && movieImages.backdrops.length > 0 ? (
                    movieImages.backdrops
                      .slice(0, 9)
                      .map((image: MovieImageItem, index: number) => (
                        <div
                          key={`backdrop-${image.file_path}-${index}`}
                          className='relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow'
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${image.file_path}`}
                            alt={`${movie.title} backdrop ${index + 1}`}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-300'
                          />
                          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2'>
                            <span className='text-white text-xs'>
                              {image.width} × {image.height}
                            </span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p className='text-gray-500 col-span-full'>
                      No backdrops available
                    </p>
                  )}
                </div>
              )}

              {/* Image Grid - Posters */}
              {activeTab === 'posters' && (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                  {movieImages.posters && movieImages.posters.length > 0 ? (
                    movieImages.posters
                      .slice(0, 10)
                      .map((image: MovieImageItem, index: number) => (
                        <div
                          key={`poster-${image.file_path}-${index}`}
                          className='relative aspect-[2/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow'
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${image.file_path}`}
                            alt={`${movie.title} poster ${index + 1}`}
                            fill
                            className='object-cover hover:scale-105 transition-transform duration-300'
                          />
                          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2'>
                            <span className='text-white text-xs'>
                              {image.width} × {image.height}
                            </span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p className='text-gray-500 col-span-full'>
                      No posters available
                    </p>
                  )}
                </div>
              )}

              {/* Image Grid - Logos */}
              {activeTab === 'logos' && (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                  {movieImages.logos && movieImages.logos.length > 0 ? (
                    movieImages.logos
                      .slice(0, 8)
                      .map((image: MovieImageItem, index: number) => (
                        <div
                          key={`logo-${image.file_path}-${index}`}
                          className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 p-4 shadow-md hover:shadow-xl transition-shadow flex items-center justify-center'
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${image.file_path}`}
                            alt={`${movie.title} logo ${index + 1}`}
                            fill
                            className='object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300'
                          />
                        </div>
                      ))
                  ) : (
                    <p className='text-gray-500 col-span-full'>
                      No logos available
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MovieDetails
