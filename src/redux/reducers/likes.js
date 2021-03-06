
import { LIKE_SUCCESS, LIKE_FAILURE, DELETE_LIKE, DELETE_SUCCESS,DELETE_FAILURE} from '../actions/messages'
import { LIKES } from '../actions/likes'
const DEFAULT_STATE = {
  likes: [
    {
      "id": 0,
      "username": "",
      "messageId": 0,
      "createdAt": "2020-09-03T17:10:37.7422"
    }
  ]
}

export const likesReducer = (state = {...DEFAULT_STATE}, action) => {
  switch(action.type) {
    case LIKES: 
      const { messageId } = action.payload.like
      return {
        ...DEFAULT_STATE, 
        messageId
      };
    case LIKE_SUCCESS: 
      const { memberId } = action.payload;
      return {
        ...DEFAULT_STATE, 
        memberId
      };
    case DELETE_LIKE:
      const  likeId  = action.payload
      return {
        ...DEFAULT_STATE,
        likeId
      };
    case DELETE_SUCCESS: 
      return {
        ...DEFAULT_STATE, 
        likeId
      };
    case DELETE_FAILURE:
      return {
        ...DEFAULT_STATE, 
        error: action.payload
    };
    default:
      return state;
  }
};



export default likesReducer