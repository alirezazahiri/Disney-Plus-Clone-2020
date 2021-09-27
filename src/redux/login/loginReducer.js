const initialState = {
  loading: false,
  user: null,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    case "FETCH_USER_FAILURE":
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
};

export default userReducer
