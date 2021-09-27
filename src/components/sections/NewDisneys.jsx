import React from "react";

// Custom Hooks
import useMovies from "../../hooks/useMovies";

// Components
import Movie from "../common/Movie";

const NewDisneys = () => {
  const movies = useMovies("newDisneys");

  return movies ? <Movie movies={movies} /> : "Loading...";
};

export default NewDisneys;
