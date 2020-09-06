import { GET_MESSAGE_LIST, DELETE_MESSAGE } from "../actions/messages";
import { FAILURE } from "../actions/defaultuser";
const INITIAL_STATE = {
  loading: false,
  error: "",
};

export const getMessageListReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case GET_MESSAGE_LIST:
      const { messages } = action.payload;

      return {
        ...INITIAL_STATE,
        loading: false,
        messages,
      };

    case DELETE_MESSAGE:
      const { id } = action.payload.message;
      return {
        ...INITIAL_STATE,

        loading: false,
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
