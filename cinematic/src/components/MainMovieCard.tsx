import { MovieCard } from "@/interfaces/movie";
import Image from "next/image";
import React from "react";

const MainMovieCard: React.FC<MovieCard> = ({
  name,
  title,
  poster_path,
  description,
}) => {
  return (
    <>
      <div>
        <div className="w-full">
          <Image
            src={poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}` : '/placeholder.png'}
            alt={`${title} Poster`}
            className="w-full h-auto rounded-lg"
            width={500}
            height={750}
          />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
    </>
  );
};

export default MainMovieCard;
