// TODO: implement
import {ADD_MESSAGE, FAILURE} from '../actions'
import { LIKES } from './likes'
const INITIAL_STATE = {
    id: 0,
    text:'',
    username: '',
    createdAT:'',
    likes:[
      {
        "id": 0,
        "username": "",
        "messageId": 0,
        "createdAt": "2020-09-03T17:10:37.7422"
      }
    ],
    loading: false,
    error: ''
  };


export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      
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
      
      default:
        return state;
    }
  };