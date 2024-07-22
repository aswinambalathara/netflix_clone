import React, { useEffect, useState } from "react";
import {imageBaseUrl} from "../../constants/constants";
import "./Banner.css";
import axios from "../../axios";

export default function Banner(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div className="banner" style={{backgroundImage:`url(${imageBaseUrl+movie.backdrop_path})`}}>
      <div className="content">
        <h1 className="title">{movie.name}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="movie_description">
          {movie.overview}
        </h1>
      </div>
      <div className="fadebottom"></div>
    </div>
  );
}
