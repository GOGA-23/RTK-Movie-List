import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllSeries,
  getState,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const prevState = useSelector(getState);
  let renderMovies,
    renderSeries = "";

  renderMovies =
    // Getting the response true from the data
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h4>{movies.Error}</h4>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h4>{series.Error}</h4>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        {prevState.loading ? (
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            Loading...
          </div>
        ) : (
          <div className="movie-container">{renderMovies}</div>
        )}
      </div>
      <div className="movie-list">
        <h2>Series</h2>
        {prevState.loading ? (
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            Loading...
          </div>
        ) : (
          <div className="movie-container">{renderSeries}</div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
