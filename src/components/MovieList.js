import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="no-results">No movies to display.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
