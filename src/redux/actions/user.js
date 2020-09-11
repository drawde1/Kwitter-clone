import api from "../../utils/api";
import { actions } from "./auth";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER = "GET_USER";
export const FAILURE = "FAILURE";
export const LOAD = "LOAD";
export const DELETE_USER = "DELETE_USER";
export const ADD_PICTURE = "USER_PICTURE";
export const UPDATE_PICTURE = "UPDATE_PICTURE";
export const GET_USER_LIST = "GET_USER_LIST";

export const user = credentials => async (dispatch, getState) => {
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

export const getUserList = userListParams => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.getUserList(userListParams);
    console.log(payload);

    dispatch({ type: GET_USER_LIST, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

// getUserList
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
export const deleteUser = credentials => async (dispatch, getState) => {
  return dispatch(_deleteUser(credentials)).then(() => {
    return dispatch(actions.logout());
  });
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

export const getUserInfo = username => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.getUser(username);

    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};
