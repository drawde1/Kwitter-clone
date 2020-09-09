import { combineReducers } from "redux";
import { authReducer } from "./auth";
<<<<<<< HEAD
import { picReducer } from "./pic";
import { defaultUserReducer } from "./user";
import { addMessageReducer } from "./messages";
import { getMessageListReducer } from "./messagesList";
import { getUserReducer } from "./getUser";
// getUserReducer
// export default combineReducers({
//     auth: authReducer,
//     addMsg: addMessageReducer,
//     getMessageList: getMessageListReducer,
//     user: defaultUserReducer,
//     pic: picReducer,
//     getUser:getUserReducer
//     });
=======
import { picReducer } from "./pic"
import { defaultUserReducer} from './user'
import { updateUserReducer } from './updateUser'
import { likesReducer } from './likes'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
import {getUserReducer} from './getUser'
import { addLikeReducer } from './addLike'
// getUserReducer


export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
  addUser: defaultUserReducer,
  updateUser: updateUserReducer,
  addMsg: addMessageReducer,
  getMessageList: getMessageListReducer,
  user: defaultUserReducer,
  pic: picReducer,
  getUser:getUserReducer
});
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
