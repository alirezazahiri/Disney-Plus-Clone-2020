import React from "react";

// Custom Hooks
import useMovies from "../../hooks/useMovies";

// Components
import Movie from "../common/Movie";

const Recommends = () => {
  const movies = useMovies("recommends");

  return movies ? <Movie movies={movies} /> : "Loading...";
};

export default Recommends;
