import { combineReducers } from "redux";
import { authReducer } from "./auth";
<<<<<<< HEAD
import { picReducer } from "./users"

export default combineReducers({ auth: authReducer },
{ pic: picReducer })
;
=======
import { defaultUserReducer} from './user'
import {addMessageReducer} from './messages'
import {getMessageListReducer} from './messagesList'
export default combineReducers({ auth: authReducer,
    addMsg: addMessageReducer,
    getMessageList: getMessageListReducer,user: defaultUserReducer 
    });
>>>>>>> 4e6d2655debf5a91aefef16e9c57017d1cf53a6a
