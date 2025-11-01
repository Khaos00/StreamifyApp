import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getLatestMovies } from "../services/tmdbService";

function TopMovies() {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestMovies()
      .then((data) => setLatest(data.slice(0, 6))) 
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-3">
        <Spinner animation="border" size="sm" /> Loading latest movies...
      </div>
    );
  }

  return (
    <div className="bg-light p-3 rounded">
      <h5 className="text-center fw-bold mb-3">Latest Movies</h5>
      {latest.map((movie) => (
  <a
    key={movie.id}
    href={`https://www.themoviedb.org/movie/${movie.id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none text-dark"
  >
    <div className="d-flex align-items-center mb-3">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "https://via.placeholder.com/50"
        }
        alt={movie.title}
        width="50"
        height="70"
        className="me-2 rounded"
      />
      <span>{movie.title}</span>
    </div>
  </a>
))}

    </div>
  );
}

export default TopMovies;
