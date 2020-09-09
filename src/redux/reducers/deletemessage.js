import { DELETE_MESSAGE, FAILURE } from "../actions";
const INITIAL_STATE = {
  id: 0,
  text: "",
  username: "",
  createdAT: "",
  likes: [],
  loading: false,
  error: "",
};

export const deleteMessage = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case DELETE_MESSAGE:
      return [
        {
          text: action.text,
          completed: false,
        },
      ];
    default:
      return { state };
  }
};
