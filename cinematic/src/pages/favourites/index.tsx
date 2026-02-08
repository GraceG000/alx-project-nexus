// app/favorites/page.tsx
'use client'
import { useFavorites } from '@/hooks/useFavorites'
import { FavoriteButton } from '@/components/FavoriteButton'
import { SidebarToggle } from '@/components/ui/SidebarToggle'
import  MainMovieCard  from '@/components/MainMovieCard'
import { useState } from 'react'

const Favourites = () => {
  const { favorites } = useFavorites()
  const [searchQuery, setSearchQuery] = useState('')

  // Filter favorites based on search query
  const filteredFavorites = favorites.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (favorites.length === 0) {
    return (
      <>
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
            <SidebarToggle />
          </div>
          <div className=''>
            <input
              className='bg-white rounded-full px-4 py-2 border-none'
              placeholder='find your movies...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className='container mx-auto p-8 text-center'>
          <h1 className='text-4xl font-bold mb-4'>My Favorites</h1>
          <p className='text-gray-500'>
            No favorites yet. Start adding some movies!
          </p>
        </div>
      </>
    )
  }

  return (
    <div className='container mx-auto'>
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
          <SidebarToggle />
        </div>
        <div className=''>
          <input
            className='bg-white rounded-full px-4 py-2 border-none'
            placeholder='find your movies...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className='text-sm text-gray-500 mt-4 px-4'>
          Showing {filteredFavorites.length} of {favorites.length} favorites
        </p>
      )}

      {/* Movies Grid */}
      {filteredFavorites.length > 0 ? (
        <div className='px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredFavorites.map(movie => (
            <MainMovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </div>
      ) : (
        <div className='text-center text-gray-500 py-8'>
          <p>No favorites found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}
export default Favourites