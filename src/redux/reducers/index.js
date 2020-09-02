import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './user'
export default combineReducers({ auth: authReducer },{ defaultuser:defaultUserReducer});
