import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './user'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
export default combineReducers({ auth: authReducer,
    addMsg: addMessageReducer,
    getMessageList: getMessageListReducer,user: defaultUserReducer 
    });
