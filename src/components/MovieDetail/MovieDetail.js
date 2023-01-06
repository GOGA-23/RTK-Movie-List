import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrSeriesDetail,
  getMovieOrSeries,
  removeSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";
import noPoster from "../../images/no-poster-available.jpg";

const MovieDetail = () => {
  // The useParams() hook returns an object parameter of current URL
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrSeries);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrSeries());
    };
  }, [dispatch, imdbID]);

  return (
    <section className="movie-section">
      <div className="wrapper">
        {/* Object.keys() method returns an Array Iterator object */}
        {Object.keys(data).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="section-left">
              <h2>{data.Title}</h2>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i className="fa-solid fa-star"></i>
                  {data.imdbRating}
                </span>
                <span>
                  IMDB Vote <i className="fa-solid fa-thumbs-up"></i>
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa-solid fa-person-running"></i>
                  {data.Runtime}
                </span>
                <span>
                  Year<i className="fa-solid fa-calendar-days"></i> {data.Year}
                </span>
              </div>
              <div className="movie-plot">
                <p>{data.Plot}</p>
              </div>
              <div className="movie-info">
                <div className="movie-director">
                  <span className="color">Director</span>
                  <span>{data.Director}</span>
                </div>
                <div className="movie-stars">
                  <span className="color">Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div className="movie-genre">
                  <span className="color">Genre</span>
                  <span>{data.Genre}</span>
                </div>
                <div className="movie-lang">
                  <span className="color">Language</span>
                  <span>{data.Language}</span>
                </div>
                <div className="movie-award">
                  <span className="color">Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>

            <div className="section-right">
              {data.Poster !== "N/A" ? (
                <img src={data.Poster} alt={data.Title} />
              ) : (
                <img src={noPoster} alt={data.Title} />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MovieDetail;
