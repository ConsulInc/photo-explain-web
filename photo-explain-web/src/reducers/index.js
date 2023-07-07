import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  // other reducers go here
});

export default rootReducer;
