import { ADD_USER, FAILURE, LOAD, DELETE_USER } from "../actions";

const INITIAL_STATE = {
  username: "",
  displayname: "",
  createdAt: "",
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
      const { username, displayname, createdAt } = action.payload.user;
      return {
        ...INITIAL_STATE,
        username,
        displayname,
        createdAt,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
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
