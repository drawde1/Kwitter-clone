import {GET_USER,  GET_USER_FAIL, GET_USER_LOAD} from '../actions'

const INITIAL_STATE = {
    pictureLocation: "",
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    loading: false,
    error: "",
  };


export const getUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case GET_USER_LOAD:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case GET_USER:
        const { pictureLocation,username, displayName,about,createdAt,updatedAt} = action.payload.user;
        return {
          ...INITIAL_STATE,
          pictureLocation,
          username,
          displayName,
          about,
          createdAt,
          updatedAt,
          loading: false,
          
        };
      case GET_USER_FAIL:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default:
        return state;
    }
  };