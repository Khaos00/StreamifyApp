import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MovieList from "./components/MovieList";
import { getMovies } from "./services/movieService";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (search.trim() === "") return;

    setLoading(true);
    setError("");

    getMovies(search)
      .then((data) => setMovies(data))
      .catch(() => setError("No movies found or failed to fetch."))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="app-container">
      <Header />
      <h1 className="title">🎬 Streamify</h1>
      <SearchMovie onSearch={setSearch} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default App;
