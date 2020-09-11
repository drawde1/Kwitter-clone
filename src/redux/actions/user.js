import api from '../../utils/api'
import {actions} from'./auth'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_USER = 'GET_USER'
export const FAILURE = 'FAILURE'
export const LOAD = 'LOAD'
export const DELETE_USER = "DELETE_USER";
export const ADD_PICTURE = "USER_PICTURE";
export const UPDATE_PICTURE = "UPDATE_PICTURE";

// export const getPicture = (credentials) => async (dispatch, getState) => {
//   try {
//       const payload = await api.addPicture(credentials);
//       console.log(payload)
//           return {
//               type: ADD_PICTURE, payload
//           }
//   } catch (err) {
//       console.log("err")
//   }
// }

// export const setPicture = (credentials) => async (dispatch, getState) => {
//   try {
//       const payload = await api.getPictures(credentials);
//       console.log(payload)
//           return {
//               type: UPDATE_PICTURE
//           }
//   } catch (err) {
//       console.log("err")
//   }
// }

export const user = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.adduser(credentials);

    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: ADD_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};


export const _deleteUser = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    console.log("Delete User Action", credentials);
    const payload = await api.deleteUser(credentials);

    console.log(payload);

    dispatch({ type: DELETE_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};
export const deleteUser = (credentials) => async (dispatch, getState) => {
  return dispatch(_deleteUser(credentials))
  .then(() => {return dispatch(actions.logout())})
};

export const updateuser = credentials => async (dispatch, getState) => {
  console.log(credentials);
  try {
    dispatch({ type: LOAD });
    const payload = await api.updateuser(credentials);
    dispatch({ type: UPDATE_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

// export const updateuser = credentials => async (dispatch, getState) => {
//   return dispatch(_updateuser(credentials))

//   .then(() => {return dispatch(getUserInfo())})
// };

export const getUserInfo = username => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.getUser(username);

    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};
