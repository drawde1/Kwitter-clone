import {
  ADD_USER,
  FAILURE,
  LOAD,
  DELETE_USER,
  DELETE_MESSAGE,
} from "../actions";

const INITIAL_STATE = {
  username: "",
  displayName: "",
  loading: false,
  error: "",
  deletedMsg: '',
};

export const defaultUserReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case ADD_USER:
      const { username, displayname } = action.payload.user;
      return {
        ...INITIAL_STATE,
        username,
        displayname,
        loading: false,
      };
      case DELETE_USER:
        return{
          ...INITIAL_STATE,
          deletedMsg: action.payload,
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
