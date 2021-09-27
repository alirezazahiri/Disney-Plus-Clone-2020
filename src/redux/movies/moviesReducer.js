const initialState = {
  newDisneys: [],
  originals: [],
  trendings: [],
  recommends: [],
  all: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEW_DISNEYS":
      return { ...state, newDisneys: action.payload };
    case "GET_TRENDINGS":
      return { ...state, trendings: action.payload };
    case "GET_RECOMMEDS":
      return { ...state, recommends: action.payload };
    case "GET_ORIGINALS":
      return { ...state, originals: action.payload };
    case "GET_ALL":
      return { ...state, all: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
