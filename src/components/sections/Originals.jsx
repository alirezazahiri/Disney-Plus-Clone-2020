import React from "react";

// Custom Hooks
import useMovies from "../../hooks/useMovies";

// Components
import Movie from "../common/Movie";

const Originals = () => {
  const movies = useMovies("originals");

  return movies ? <Movie movies={movies} /> : "Loading...";
};

export default Originals;
