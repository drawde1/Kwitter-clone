import {ADD_USER, FAILURE, LOAD} from '../actions'


const INITIAL_STATE = {
    username: "",
    displayname: '',
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
        const { username, displayname } = action.payload.user;
        return {
          ...INITIAL_STATE,
          username,
          displayname,
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