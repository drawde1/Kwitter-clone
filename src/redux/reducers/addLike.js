// TODO: implement
import { LIKES, LIKE_SUCCESS, LIKE_FAILURE } from '../actions/likes'
import { useReducer } from 'react';
import { combineReducers } from 'redux'

// Default State
const DEFAULT_STATE = {
  like: [
    {
      "id": 0,
      "username": "",
      "messageId": 0,
      "createdAt": "2020-09-03T17:10:37.7422"
    }
  ]
}

export const addLikeReducer = (state = { ...DEFAULT_STATE }, action) => {
  switch(action.type) {
    case "INCREMENT":
      const { messageId } = action.payload.like
        return {
          ...DEFAULT_STATE + 1,
          messageId
    };
    case "DECREMENT":
        return {
          ...DEFAULT_STATE - 1,
          messageId
    }; 
    default:
        return state;
  }
}

export default addLikeReducer