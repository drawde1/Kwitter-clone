import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { likesReducer } from './likes'

/*//export default combineReducers({ 
  auth: authReducer,
  likes: likesReducer, 
});*/
import { defaultUserReducer} from './user'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
export default combineReducers({ auth: authReducer,
    addMsg: addMessageReducer,
    getMessageList: getMessageListReducer,user: defaultUserReducer, likes: likesReducer 
    });
import { picReducer } from "./users"

export default combineReducers({ auth: authReducer },
{ pic: picReducer })
;
