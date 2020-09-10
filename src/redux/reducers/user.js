import {
  ADD_USER,
  FAILURE,
  LOAD,
  DELETE_USER,
  DELETE_MESSAGE,
} from "../actions";

const INITIAL_STATE = {
  username: "",
  displayname: "",
  loading: false,
  error: "",
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
    case FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
      };
    case DELETE_MESSAGE:
      const { delete_message } = action.payload.delete_message;
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
