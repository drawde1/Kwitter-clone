


import api from '../../utils/api'

export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const FAILURE = 'FAILURE'
export const LOAD = 'LOAD'


export const user = (credentials) => async (dispatch, getState) => {
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

export const updateuser = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.updateuser(credentials);
    dispatch({ type: ADD_USER, payload })
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

