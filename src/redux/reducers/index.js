import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { picReducer } from "./pic"
import { defaultUserReducer} from './user'
import { updateUserReducer } from './updateUser'
import { likesReducer } from './likes'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
import {getUserReducer} from './getUser'
<<<<<<< HEAD
import {infiniteScrollReducer} from './infiniteScroll'
import {getMessageListByUserReducer} from './getMessageListByUser'
=======
import { addLikeReducer } from './addLike'
// getUserReducer


>>>>>>> 67a89c09974e240a0fc4e5eacd84d6840d6ebe15
export default combineReducers({ 
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
  getUser:getUserReducer
});
