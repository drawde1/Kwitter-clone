import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { picReducer } from "./pic"
import { defaultUserReducer} from './user'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
import {getUserReducer} from './getUser'
// getUserReducer
export default combineReducers({ 
    auth: authReducer,
    addMsg: addMessageReducer,
    getMessageList: getMessageListReducer,
    user: defaultUserReducer,
    pic: picReducer,
    getUser:getUserReducer
    });
