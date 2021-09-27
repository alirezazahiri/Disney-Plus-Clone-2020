import { combineReducers } from "redux";

// Reducers
import userReducer from './login/loginReducer';

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer