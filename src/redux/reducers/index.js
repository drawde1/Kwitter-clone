import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { picReducer } from "./users"

export default combineReducers({ auth: authReducer },
{ pic: picReducer })
;
