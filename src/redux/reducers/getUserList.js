 
import {GET_USER_LIST,GET_USER_LIST_LOAD,GET_USER_LIST_FAIL} from '../actions'

const INITIAL_STATE = {
  
    loading: false,
    error:"",
    users: [],
   };
 
 
 export const getUserListReducer = (state = {...INITIAL_STATE},action) =>
 {
     switch (action.type) {
        case GET_USER_LIST_LOAD:
            return {
              ...INITIAL_STATE,
              loading: true
            };
         case GET_USER_LIST:
             const {users}  = action.payload
           return {
             ...INITIAL_STATE,
             users: users
           };
           case GET_USER_LIST_FAIL:
               return{
                 ...INITIAL_STATE,
                 error: action.payload
               }
         default:
         return state
     }
 }