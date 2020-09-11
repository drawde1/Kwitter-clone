import { UPDATE_USER, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from '../actions'

const INITIAL_STATE = {
    password: "",
    about: "",
    displayname: "",
    loading: false,
    error: ""
}

export const updateUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...INITIAL_STATE,
          loading: true,
        };
      case UPDATE_USER_SUCCESS:
        const data = action.payload.updateuser;
        return {
          ...INITIAL_STATE,
          data,
          loading: false,
        };
      case UPDATE_USER_FAILURE:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default: return state;
    }
  };