import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './defaultuser'
import {addMessageReducer} from './messages'

export default combineReducers({ auth: authReducer },
    { defaultuser:defaultUserReducer},
    {addMessage: addMessageReducer});
