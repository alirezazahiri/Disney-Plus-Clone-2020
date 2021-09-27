import { useSelector } from "react-redux";

const useMovies = (type) => {
  const state = useSelector((state) => state.moviesState);
  let movies;
  if (type === "newDisneys") movies = state.newDisneys;
  else if (type === "originals") movies = state.originals;
  else if (type === "trendings") movies = state.trendings;
  else if (type === "recommends") movies = state.recommends;
  else if (type === "all") movies = state.all;

  return movies;
};

export default useMovies;
