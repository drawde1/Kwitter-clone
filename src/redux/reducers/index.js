import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { picReducer } from "./pic"
import { defaultUserReducer} from './user'
import { updateUserReducer } from './updateUser'
import { likesReducer } from './likes'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
import {getUserReducer} from './getUser'
import {infiniteScrollReducer} from './infiniteScroll'
import {getMessageListByUserReducer} from './getMessageListByUser'
import { addLikeReducer } from './addLike'
export default combineReducers({ 
  pic:picReducer,
  getMessageListByUser:getMessageListByUserReducer,
  auth: authReducer,
  infiniteScroll: infiniteScrollReducer,
  likes: likesReducer, 
  addUser: defaultUserReducer,
  updateUser: updateUserReducer,
  addMsg: addMessageReducer,
  getMessageList: getMessageListReducer,
  user: defaultUserReducer,
  pic: picReducer,
  getUser:getUserReducer,
  addLike:addLikeReducer,
});
