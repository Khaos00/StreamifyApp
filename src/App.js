import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { getMoviesByGenre } from "./services/tmdbService";
import SearchMovie from "./components/SearchMovie";
import MovieList from "./components/MovieList";
import TopMovies from "./components/TopMovies";
import AboutUs from "./components/AboutUs";
import { getMovies } from "./services/movieService";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        let data = [];

        if (category) {
          // clear search if category chosen
          setSearch("");
          data = await getMoviesByGenre(category);
        } else if (search.trim()) {
          // clear category if search used
          setCategory("");
          data = await getMovies(search);
        }

        setMovies(data || []);
      } catch (e) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, category]);

  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="search-section">
                <SearchMovie onSearch={setSearch} onCategorySelect={setCategory} />
              </div>

              <div className="container mt-4">
                <h3 className="section-title">
                  {category
                    ? `🎭 ${category} Movies`
                    : search
                    ? ` Results for "${search}"`
                    : " Browse Movies"}
                </h3>

                <div className="row">
                  <div className="col-md-8">
                    {loading && (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "150px" }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}

                    {error && <p className="error">{error}</p>}
                    {!loading && !error && <MovieList movies={movies} />}
                  </div>

                  <div className="col-md-4">
                    <TopMovies />
                  </div>
                </div>
              </div>
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
