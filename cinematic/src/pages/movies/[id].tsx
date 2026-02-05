import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Movie } from "@/interfaces/movie";
import { getMovieByID } from "@/pages/api/movie";
import Image from "next/image";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieByID(Number(id));
        setMovie(data);
        console.log("Movie Details:", data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!movie) return <div className="p-8">Movie not found</div>;

  return (
    <div className="p-8">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        Back
      </button>
<div className="grid grid-rows-4">
   <div>
        <Image
          src={
            movie.poster_path
              ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={`${movie.title} Poster`}
          className="w-full h-auto rounded-lg"
          width={500}
          height={300}
        />
      </div>

      <div>{movie.overview}</div>
  
</div>
     
    </div>
  );
};

export default MovieDetails;
