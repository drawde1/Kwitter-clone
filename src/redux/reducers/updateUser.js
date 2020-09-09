import { UPDATE_USER, FAILURE, LOAD } from '../actions'

const INITIAL_STATE = {
    password: "",
    about: "",
    displayname: "",
    loading: false,
    error: ""
}

export const updateUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case UPDATE_USER:
        const { password, about, displayname, } = action.payload.updateuser;
        return {
          ...INITIAL_STATE,
          password,
          about,
          displayname,
          loading: false,
        };
      case FAILURE:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default: return state;
    }
  };