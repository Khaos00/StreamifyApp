import axios from "axios";

const TMDB_API = "https://api.themoviedb.org/3";
const API_KEY = "7433e30ae3ecf6a5b9797c0538c421f5"; 


export async function getLatestMovies() {
  try {
    const response = await axios.get(`${TMDB_API}/movie/now_playing`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching latest movies:", error.message);
    throw error;
  }
}


export async function getMoviesByGenre(genreId) {
  try {
    const response = await axios.get(`${TMDB_API}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies by genre:", error.message);
    throw error;
  }
}
