import React from "react";

// Custom Hooks
import useMovies from "../../hooks/useMovies";

// Components
import Movie from "../common/Movie";

const Trendings = () => {
  const movies = useMovies("trendings");

  return movies ? <Movie movies={movies} /> : "Loading...";
};

export default Trendings;
