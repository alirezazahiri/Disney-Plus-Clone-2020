import { combineReducers } from "redux";

// Reducers
import userReducer from "./login/loginReducer";
import moviesReducer from "./movies/moviesReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  moviesState: moviesReducer,
});

export default rootReducer;
