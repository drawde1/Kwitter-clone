import api from '../../utils/api'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_USER = 'GET_USER'
export const FAILURE = 'FAILURE'
export const LOAD = 'LOAD'
export const DELETE_USER = "DELETE_USER";

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

export const deleteUser = credentials => async (dispatch, getState) => {
  try {

    dispatch({ type: LOAD });
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


export const updateuser = credentials => async (dispatch, getState) => {
  console.log(credentials)
  try {
    dispatch({ type: LOAD });
    const payload = await api.updateuser(credentials);
    dispatch({ type: UPDATE_USER, payload })
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

export const getUserInfo = (username) => async (dispatch, getState) => {
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


