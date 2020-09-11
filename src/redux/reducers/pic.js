// TODO: implement
import {LOAD_PICTURE, GET_PICTURE, FAIL_PICTURE} from '../actions/photos'

const INITIAL_STATE = {
    error: "",
    loading: false,
    
  };

export const picReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD_PICTURE:
        return {
          ...INITIAL_STATE,
          loading: true, 
        };
        case GET_PICTURE:
        return {
          ...INITIAL_STATE,
          photo: action.payload, 
        };
        case FAIL_PICTURE:
            return {
              ...INITIAL_STATE, error: action.payload
        };
        default:
        return { state }
    }
}