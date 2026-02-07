import { MovieCard } from "@/interfaces/movie";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeatureMovie: React.FC<MovieCard> = ({
  id,
  title,
  poster_path
}) => {
  return (
    <Link href={`/movies/${id}`} className="block h-full">

      <div className="relative h-full w-full overflow-hidden rounded-lg">

        <Image
          src={
            poster_path
              ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${poster_path}`
              : "/placeholder.png"
          }
          alt={`${title} Poster`}
          width={1500}
          height={250}
          className="object-cover"
          priority
        />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>
        </div>

      </div>

    </Link>
  );
};

export default FeatureMovie;
