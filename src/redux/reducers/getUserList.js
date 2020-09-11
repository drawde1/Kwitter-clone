 
import {GET_USER_LIST,LOAD,FAILURE} from '../actions'

const INITIAL_STATE = {
  
    loading: false,
    error:"",
    users: [],
   };
 
 
 export const getUserListReducer = (state = {...INITIAL_STATE},action) =>
 {
     switch (action.type) {
        case LOAD:
            return {
              ...INITIAL_STATE,
              laoding: true
            };
         case GET_USER_LIST:
           return {
             ...INITIAL_STATE,
             users: action.payload
           };
           case FAILURE:
               return{
                 ...INITIAL_STATE,
                 error: action.payload
               }
         default:
         return state
     }
 }