import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import avatar from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  // onSubmit time, this function will be called
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert method used to prevent empty value while Enter
    if (term === "") return alert("Type the movie or series name ");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter the Movie or Series Name"
          />
          <button className="btn">
            <i className="fa-brands fa-searchengin"></i>
          </button>
        </form>
      </div>
      <div className="user-img">
        <img src={avatar} alt="user-avatar" />
      </div>
    </div>
  );
};

export default Header;
