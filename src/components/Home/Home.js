import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  // dispatch the thunk as needed in the app
  const dispatch = useDispatch();
  const movieTerm = "Avengers"; //initial movie name while showing the app
  const seriesTerm = "Friends"; //initial series name while showing the app
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieTerm));
    dispatch(fetchAsyncSeries(seriesTerm));
  }, [dispatch]);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
