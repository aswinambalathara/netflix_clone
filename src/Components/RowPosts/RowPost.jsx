import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageBaseUrl, API_KEY, videoOpts } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setMovieId] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(props.url);
        //console.log(response.data);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const handleMovieClick = async (id) => {
    try {
      const response = await axios.get(
        `movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );

      if (response.data.results.length !== 0) {
        setMovieId(response.data.results[0].key);
      } else {
        setMovieId(null);
        //console.log(response);
      }
    } catch (error) {
      setMovieId(null);
      console.log(error);
    }
  };
  return (
    <div className="rowPostWrapper">
      <h2 className="Rowtitle">{props.title}</h2>
      <div className="posters">
        {movies.map((movObj, index) => (
          <img
            onClick={() => handleMovieClick(movObj.id)}
            key={index}
            src={`${imageBaseUrl + movObj.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? "smallPoster" : "poster"}
          />
        ))}
      </div>
      {urlId && <Youtube opts={videoOpts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
