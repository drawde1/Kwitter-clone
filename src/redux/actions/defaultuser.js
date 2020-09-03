


import api from '../../utils/api'

export const ADD_USER = 'ADD_USER'
export const FAILURE = 'FAILURE'
export const LOAD = 'LOAD'


export const adduser = (credentials) => async (dispatch, getState) => {
    try {
      dispatch({ type: LOAD });
      const payload = await api.adduser(credentials);
     
      dispatch({ type: ADD_USER, payload });
    } catch (err) {
      dispatch({
        type: FAILURE,
        payload: err.message,
      });
    }
  };