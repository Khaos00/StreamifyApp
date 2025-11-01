import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie }) {
  const title = movie.Title || movie.title;
  const year = movie.Year || (movie.release_date ? movie.release_date.split("-")[0] : "N/A");
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/300x450?text=No+Image";

  // IMDb or TMDb redirect
  const imdbUrl = movie.imdbID
    ? `https://www.imdb.com/title/${movie.imdbID}`
    : movie.id
    ? `https://www.themoviedb.org/movie/${movie.id}`
    : "#";

  return (
    <a href={imdbUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <Card className="movie-card shadow-sm">
        <Card.Img variant="top" src={poster} alt={title} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center text-muted">{year}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}

export default MovieCard;
