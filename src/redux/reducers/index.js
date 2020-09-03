import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { defaultUserReducer} from './user'
import { likesReducer } from './likes'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'

export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
  addUser: defaultUserReducer,
  addMsg: addMessageReducer,
  getMessageList: getMessageListReducer,
  user: defaultUserReducer 
});
