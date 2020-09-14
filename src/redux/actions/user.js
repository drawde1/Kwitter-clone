import api from '../../utils/api'
import {actions} from'./auth'
export const ADD_USER_LOAD = 'ADD_USER_LOAD'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER_LOAD = 'UPDATE_USER_LOAD'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_USER_LOAD  = 'GET_USER_LOAD '
export const GET_USER_FAIL = 'GET_USER_FAIL'
export const GET_USER = 'GET_USER'
export const DELETE_USER_LOAD = "DELETE_USER_LOAD";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";
export const DELETE_USER = "DELETE_USER";
export const GET_USER_LIST_LOAD = "GET_USER_LIST_LOAD";
export const GET_USER_LIST_FAIL = "GET_USER_LIST_FAIL";
export const GET_USER_LIST = "GET_USER_LIST";



export const user = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_USER_LOAD });
    const payload = await api.adduser(credentials);

    dispatch({ type: ADD_USER, payload });
  } catch (err) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: err.message,
    });
  }
};

export const getUserList = userListParams => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER_LIST_LOAD });
    const payload = await api.getUserList(userListParams);
  
    dispatch({ type: GET_USER_LIST, payload });
  } catch (err) {
    dispatch({
      type: GET_USER_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const _deleteUser = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER_LOAD});
  
    const payload = await api.deleteUser(credentials);

    dispatch({ type: DELETE_USER, payload });
  } catch (err) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: err.message,
    });
  }
};
export const deleteUser = (credentials) => async (dispatch, getState) => {
  return dispatch(_deleteUser(credentials))
  .then(() => {return dispatch(actions.logout())})
};

export const _updateuser = credentials => async (dispatch, getState) => {
  
  try {
    dispatch({ type:UPDATE_USER_LOAD});
    const payload = await api.updateuser(credentials);
    dispatch({ type: UPDATE_USER, payload });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};
export const updateuser = (credentials) => async (dispatch, getState) => {
  return dispatch(_updateuser(credentials))
  .then(() => {return dispatch(getUserInfo(credentials.username))})
};


export const getUserInfo = username => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USER_LOAD });
    const payload = await api.getUser(username);

    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: GET_USER_FAIL,
      payload: err.message,
    });
  }
};
