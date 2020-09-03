// TODO: implement
import { LIKES, LIKE_SUCCESS, LIKE_FAILURE } from '../actions/likes'

// Default State
const DEFAULT_STATE = {
  messageId: '',
}

export const likesReducer = (state = {...DEFAULT_STATE}, action) => {
  switch(action.type) {
    case LIKES: 
      return {
        ...DEFAULT_STATE, 
        memberId
      };
    case LIKE_SUCCESS: 
      const { memberId } = action.payload;
      return {
        ...DEFAULT_STATE, 
        memberId
      };
    case LIKE_FAILURE:
      return {
        ...DEFAULT_STATE, 
        error: action.payload
    };
    default:
      return state;
  }
};