import {createStore, applyMiddleware} from "redux"

// Reducer 
import rootReducer from "./rootReducer"

// Thunk 
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store