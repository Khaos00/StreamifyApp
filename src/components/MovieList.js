import React from "react";
import MovieCard from "./MovieCard";
import { Row, Col } from "react-bootstrap";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-muted mt-4">🎞️ No movies found. Try another search or category.</p>;
  }

  return (
    <Row className="g-4">
      {movies.map((movie) => (
        <Col key={movie.imdbID || movie.id} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
