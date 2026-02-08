import { MovieCard } from "@/interfaces/movie";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const MainMovieCard: React.FC<MovieCard> = ({
  id,
  title,
  poster_path
}) => {
  return (
    <>
    <Link href={`/movies/${id}`}>
      <div>
        <div className="w-full">
          <Image
            src={poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}` : '/placeholder.png'}
            alt={`${title} Poster`}
            className="w-full h-auto rounded-lg"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-center">{title}</h2>
        </div>
      </div>
     </Link> 
    </>
  );
};

export default MainMovieCard;
