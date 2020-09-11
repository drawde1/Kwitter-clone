import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_LOAD,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_LOAD,

 
} from "../actions";

const INITIAL_STATE = {
  username: "",
  displayname: "",
  loading: false,
  error: "",
  deletedMsg: '',
};

export const defaultUserReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case ADD_USER_LOAD:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
      case DELETE_USER_LOAD:
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
        
    case ADD_USER_FAIL:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
      case  DELETE_USER_FAIL:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    

    default:
      return state;
  }
};
