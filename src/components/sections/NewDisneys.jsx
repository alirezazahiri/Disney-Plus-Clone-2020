import React from "react";

// Custom Hooks
import useMovies from "../../hooks/useMovies";

// Components
import Movie from "../common/Movie";

const NewDisneys = () => {
  const movies = useMovies("newDisneys");

  return movies ? <Movie movies={movies} title="New To Disney+"/> : "Loading...";
};

export default NewDisneys;
