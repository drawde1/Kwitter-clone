import api from "../../utils/api";
import { FAILURE } from "./defaultuser";

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_LIKE = "ADD_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const GET_MESSAGE_LIST = "GET_MESSAGE_LIST";
export const LIKE_FAILURE = "LIKE_FAILURE";

export const addMessage = text => async (dispatch, getState) => {
  try {
    const payload = await api.addMessage(text);

    dispatch({ type: ADD_MESSAGE, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

export const getMessageList = msgParams => async (dispatch, getState) => {
  try {
    const payload = await api.getMessageList(msgParams);
    dispatch({ type: GET_MESSAGE_LIST, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

export const deleteMessage = messageid => async (dispatch, getState) => {
  try {
    const payload = await api.deleteMessage(messageid);
    console.log(payload);
    dispatch({ type: DELETE_MESSAGE, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};

export const _likes = messageId => async (dispatch, getState) => {
  //console.log(messageId)
  try {
    dispatch({ type: ADD_LIKE });
    //const payload = await api.likes(messageId);
    //dispatch(getMessageList())
    // console.log(payload)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
  } catch (err) {
    console.log(err);
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};

export const likes = messageId => async (dispatch, getState) => {
  dispatch(_likes(messageId)).then(() => dispatch(getMessageList()));
};

export const deleteLikes = messageId => async (dispatch, getState) => {
  //console.log(messageId)
  try {
    dispatch({ type: DELETE_LIKE });
    //const payload = await api.likes(messageId);
    // console.log(payload)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
  } catch (err) {
    console.log(err);
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};
