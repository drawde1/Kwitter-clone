import {GET_USER, FAILURE, LOAD} from '../actions'

const INITIAL_STATE = {
  pictureLocation: "",
  username: "",
  displayname: "",
  about: "",
  createdAt: "",
  updatedAt: "",
  loading: false,
  error: "",
};

export const getUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case GET_USER:
        const { pictureLocation,username, displayname,about,createdAt,updatedAt} = action.payload.user;
        return {
          ...INITIAL_STATE,
          pictureLocation,
          username,
          displayname,
          about,
          createdAt,
          updatedAt,
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