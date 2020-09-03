import { DELETE_MESSAGE } from "../actions";

const INITIAL_STATE = {
  username: "",
  displayname: "",
  loading: false,
  error: "",
  delete_message: "",
};
const UserReducer = (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case DELETE_MESSAGE:
      const { delete_message } = action.payload.delete_message;
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }

  delete_message: "";
};
