// TMDB API service module for fetching movie data and related information.
import axios from "axios";

const tmdbApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});             