import { ADD_USER, FAILURE, LOAD, DELETE_USER } from "../actions";

const INITIAL_STATE = {
<<<<<<< HEAD:src/redux/reducers/defaultuser.js
  username: "",
  displayname: "",
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
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};
=======
    username: "",
    displayname: "",
    createdAt: "",
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
        const { username, displayname, createdAt} = action.payload.user;
        return {
          ...INITIAL_STATE,
          username,
          displayname,
          createdAt,
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
>>>>>>> 17bb058b9e9ed6db7a822909c85072de14368dc1:src/redux/reducers/user.js
