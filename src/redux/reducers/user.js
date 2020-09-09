<<<<<<< HEAD
import { ADD_USER, DELETE_MESSAGE, FAILURE, LOAD } from "../actions";
=======
import {
  ADD_USER,
  FAILURE,
  LOAD,
  DELETE_USER,
  DELETE_MESSAGE,
} from "../actions";
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913

const INITIAL_STATE = {
  username: "",
  displayname: "",
<<<<<<< HEAD
  createdAt: "",
=======
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
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
<<<<<<< HEAD
      const { username, displayname, createdAt } = action.payload.user;
=======
      const { username, displayname } = action.payload.user;
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
      return {
        ...INITIAL_STATE,
        username,
        displayname,
<<<<<<< HEAD
        createdAt,
        loading: false,
      };

    case DELETE_MESSAGE:
      const { delete_message } = action.payload.user;
      return {
        ...INITIAL_STATE,
        delete_message,
      };

=======
        loading: false,
      };
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
    case FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
<<<<<<< HEAD
=======
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
      };
    case DELETE_MESSAGE:
      const { delete_message } = action.payload.delete_message;
      return {
        ...INITIAL_STATE,
      };
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913

    default:
      return state;
  }
};
