import { UPDATE_USER, FAILURE, LOAD } from '../action'

const INITIALSTATE = {
    username: "",
    displayname: "",
    about: ""
}

export const updateUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case UPDATE_USER:
        const { username, displayname, about} = action.payload.updateuser;
        return {
          ...INITIAL_STATE,
          username,
          displayname,
          about,
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