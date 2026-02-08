import { MovieCard } from "@/interfaces/movie";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const MainMovieCard: React.FC<MovieCard> = ({
  id,
  title,
  poster_path,
  overview
}) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className="w-full overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
          <Image
            src={poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}` : '/placeholder.png'}
            alt={`${title} Poster`}
            className="w-full h-auto rounded-lg transition-all duration-300 group-hover:brightness-75"
            width={300}
            height={300}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-lg">
            <p className="text-white text-sm text-center line-clamp-4">{overview}</p>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-center transition-colors duration-300 group-hover:text-primary">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MainMovieCard;