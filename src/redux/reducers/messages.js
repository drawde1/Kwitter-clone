// TODO: implement

import { ADD_MESSAGE, ADD_MESSAGE_FAIL,ADD_MESSAGE_LOAD } from "../actions";

const INITIAL_STATE = {
  id: 0,
  text: "",
  username: "",
  createdAT: "",
  likes: [
    {
      "id": 0,
      "username": "",
      "messageId": 0,
      "createdAt": "2020-09-03T17:10:37.7422",
    },
  ],
  // isActive: false,
  loading: false,
  error: "",
  delete_message: "",
};

export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case ADD_MESSAGE_LOAD :
        return{
          ...INITIAL_STATE,
          loading: true,
        };
      case ADD_MESSAGE:
        const {id, text, username, createdAT, likes } = action.payload.message;
        return {
          ...INITIAL_STATE,
          id,
          text,
          username,
          createdAT,
          likes,
          loading: false

        };
        

    case ADD_MESSAGE_FAIL:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    // case DELETE_MESSAGE:
    //   const { delete_message } = action.payload.delete_message;
    //   return {
    //     ...INITIAL_STATE,
    //   };
    default:
      return state;
  }
};
