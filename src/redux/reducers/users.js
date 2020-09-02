// TODO: implement
import {ADD_PICTURE, UPDATE_PICTURE, NO_PICTURE} from '../actions/userpicture'

const INITIAL_STATE = {
    username: "",
    picture: "",
  };

export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case ADD_PICTURE:
        return {
          ...INITIAL_STATE, 
          username,
          picture
        };
        case UPDATE_PICTURE:
        return {
          ...state, 
          username,
          picture
        };
        case NO_PICTURE:
            return {
              ...INITIAL_STATE,
        };
        default:
        return { state }
    }
}