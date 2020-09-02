import {GET_MESSAGE_LIST} from '../actions/messages'
import {FAILURE}  from '../actions/defaultuser'
const INITIAL_STATE = {
    loading: false,
    error: "",

  };


export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      
      case GET_MESSAGE_LIST:
          const {messages} = action.payload
        
        return {
          ...INITIAL_STATE,
          loading: false,
          messages
        };
        

      case FAILURE:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default:
        return state;
    }
  };