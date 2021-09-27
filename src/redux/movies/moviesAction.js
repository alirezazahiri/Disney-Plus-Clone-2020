import data from "../../disneyPlusMoviesData.json";

const getMoviesByType = (type) => {
  return data.movies.filter((movie) => movie.type === type);
};

const getNewDisneys = () => {
  return {
    type: "GET_NEW_DISNEYS",
    payload: getMoviesByType("new"),
  };
};

const getTrendings = () => {
  return {
    type: "GET_TRENDINGS",
    payload: getMoviesByType("trending"),
  };
};

const getRecommends = () => {
  return {
    type: "GET_RECOMMEDS",
    payload: getMoviesByType("recommend"),
  };
};

const getOriginals = () => {
  return {
    type: "GET_ORIGINALS",
    payload: getMoviesByType("original"),
  };
};

const getAll = () => {
  return {
    type: "GET_ALL",
    payload: data.movies,
  };
};

export { getNewDisneys, getRecommends, getOriginals, getTrendings, getAll };
