import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import {imageBaseUrl} from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          props.url
        );
        //console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div className="rowPostWrapper">
      <h2 className="Rowtitle">{props.title}</h2>
      <div className="posters">
        {movies.map((movObj,index) => (
          <img key={index}
            src={`${imageBaseUrl+movObj.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? 'smallPoster' : 'poster'}
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
