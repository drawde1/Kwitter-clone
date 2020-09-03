import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './user'
import { likesReducer } from './likes'

export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
  addUser: defaultUserReducer
});
