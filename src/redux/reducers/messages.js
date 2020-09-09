// TODO: implement
<<<<<<< HEAD
import { ADD_MESSAGE, DELETE_MESSAGE, FAILURE } from "../actions";
=======

import { ADD_MESSAGE, FAILURE, DELETE_MESSAGE,LOAD } from "../actions";
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
const INITIAL_STATE = {
  id: 0,
  text: "",
  username: "",
  createdAT: "",
<<<<<<< HEAD
  likes: [],
  loading: false,
  error: "",
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
=======
  likes: [
    {
      "id": 0,
      "username": "",
      "messageId": 0,
      "createdAt": "2020-09-03T17:10:37.7422"
    }
  ],
  loading: false,
  error: "",
  delete_message: "",
};

export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD:
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
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
  }
};
