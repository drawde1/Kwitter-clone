import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './defaultuser'
export default combineReducers({ auth: authReducer },{ defaultuser:defaultUserReducer});
