import { UPDATE_USER, UPDATE_USER_FAIL, UPDATE_USER_LOAD } from '../actions'


const INITIAL_STATE = {
    password: "",
    about: "",
    displayname: "",
    loading: false,
    error: ""
}

export const updateUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case UPDATE_USER_LOAD:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case UPDATE_USER:
        const data = action.payload.updateuser;
        return {
          ...INITIAL_STATE,
          data,
          loading: false,
        };
      case UPDATE_USER_FAIL:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default: return state;
    }
  };
