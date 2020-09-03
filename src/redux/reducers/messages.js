// TODO: implement
import { ADD_MESSAGE, FAILURE, DELETE_MESSAGE } from "../actions";
const INITIAL_STATE = {
  id: 0,
  text: "",
  username: "",
  createdAT: "",
  likes: [],
  loading: false,
  error: "",
  delete_message: "",
};

export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { id, text, username, createdAT, likes } = action.payload.message;
      return {
        ...INITIAL_STATE,
        id,
        text,
        username,
        createdAT,
        likes,
        loading: false,
      };

    case FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
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
