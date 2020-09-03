import { combineReducers } from "redux";
import { authReducer } from "./auth";
<<<<<<< HEAD
import { defaultUserReducer} from './user'
export default combineReducers({ auth: authReducer },{ defaultuser:defaultUserReducer});
=======
import { likesReducer } from './likes'

export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
});
>>>>>>> 543453bc1fa8005198e496b29be56ea5192d87c7
