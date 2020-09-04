import api from "../../utils/api";

export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const FAILURE = "FAILURE";
export const LOAD = "LOAD";

export const user = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.adduser(credentials);
    console.log(payload);
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

export const deleteUser = username => async (dispatch, getState) => {
  try {
    const payload = await api.deleteuser(username);
    console.log(payload);
    dispatch({ type: DELETE_USER, payload });
    dispatch({ type: GET_USER, payload });
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
    console.log(payload);
    // :information_source::information_source:This is how you woud debug the response to a request:information_source::information_source:
    // console.log({ result })
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};
