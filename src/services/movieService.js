import axios from "axios";

const API_URL = "https://www.omdbapi.com/?apikey=bfde435b&s=";

export async function getMovies(query) {
  try {
    const response = await axios.get(`${API_URL}${query}`);
    if (response.data.Response === "False") {
      throw new Error("No movies found");
    }
    return response.data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw error;
  }
}
