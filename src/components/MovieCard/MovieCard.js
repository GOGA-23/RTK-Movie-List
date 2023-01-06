import React from "react";
import { Link } from "react-router-dom";
import noPoster from "../../images/no-poster-available.jpg";
import "./MovieCard.scss";

// Getting destructed data through props
const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            {data.Poster !== "N/A" ? (
              <img src={data.Poster} alt={data.Title} />
            ) : (
              <img src={noPoster} alt={data.Title} />
            )}
          </div>
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
