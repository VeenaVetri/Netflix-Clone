import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner--fadeTop" />
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__buttons">

          <button className="banner__button">
          <i class='bx bx-play' ></i>Play</button>
          
          <button className="banner__button button__info">
          <i class='bx bx-info-circle' ></i>More Info</button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;