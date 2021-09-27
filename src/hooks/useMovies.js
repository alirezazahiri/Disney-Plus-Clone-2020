import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getNewDisneys,
    getTrendings,
    getOriginals,
    getRecommends
} from '../redux/movies/moviesAction';

const useMovies = (type) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.moviesState);
  let movies;
  if (type === "newDisneys") movies = state.newDisneys;
  else if (type === "originals") movies = state.originals;
  else if (type === "trendings") movies = state.trendings;
  else if (type === "recommends") movies = state.recommends;
  else movies = [];

  useEffect(() => {
    switch (type) {
      case "newDisneys":
        dispatch(getNewDisneys());
        break;
      case "originals":
        dispatch(getOriginals());
        break;
      case "trendings":
        dispatch(getTrendings());
        break;
      case "recommends":
        dispatch(getRecommends());
        break;
      default:
        movies = [];
        break;
    }
  }, []);

  return movies;
};

export default useMovies;
