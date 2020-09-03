// TODO: implement
import {ADD_PICTURE, UPDATE_PICTURE, NO_PICTURE} from '../actions/photos'

const INITIAL_STATE = {
    error: "",
  };

export const picReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case ADD_PICTURE:
        return {
          ...INITIAL_STATE, 
        };
        case UPDATE_PICTURE:
        return {
          ...INITIAL_STATE, 
        };
        case NO_PICTURE:
            return {
              ...INITIAL_STATE, error: action.payload
        };
        default:
        return { state }
    }
}