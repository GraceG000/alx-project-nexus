"use client"
import { Movie } from '@/interfaces/movie';
import { useState, useEffect } from 'react';

export function useFavorites() {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    //Load favorites from localStorage on mount...
    useEffect(() => {
        const saved = localStorage.getItem('favoriteMovies');
        if(saved) {
            setFavorites(JSON.parse(saved))
        }
    }, [])

    //Add to favorites...
    const addFavorite = (movie: Movie) =>{
        const newFavorites = [...favorites, movie];
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
    }

     const removeFavorite = (movieId: number) => {
        const newFavorites = favorites.filter(m => m.id !== movieId); // Fixed: !== instead of ! ==
        setFavorites(newFavorites);
        localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
    }

    //Check if movie is favorited...
    const isFavorite = (movieId: number) => {
        return favorites.some(m => m.id === movieId);
    };


    // Toggle favorite
  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite
  };
}