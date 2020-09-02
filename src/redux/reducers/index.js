import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { likesReducer } from './likes'

export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
});
