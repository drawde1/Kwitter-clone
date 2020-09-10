import api from "../../utils/api";
import { FAILURE } from "./defaultuser";
//import { LIKE_SUCCESS } from "./likes";

export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const ADD_MESSAGE= 'ADD_MESSAGE'
export const ADD_LIKE = 'ADD_LIKE'
<<<<<<< HEAD
export const GET_MESSAGE_LIST_USER = 'GET_MESSAGE_LIST_USER'
export const addMessage = text => async (dispatch, getState) => {
=======
export const DELETE_LIKE = 'DELETE_LIKE'
export const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST'
export const LIKE_FAILURE = 'LIKE_FAILURE'
export const LIKE_SUCCESS = 'LIKE_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'

export const addMessage= (text) => async (dispatch, getState) => {
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

  export const getMessageList = (msgParams) => async (dispatch, getState) => {
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
>>>>>>> 67a89c09974e240a0fc4e5eacd84d6840d6ebe15
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

export const _likes = (messageId) => async (dispatch, getState) => {
  console.log(messageId)
  try {
    dispatch({ type: ADD_LIKE });
    const payload = await api.likes(messageId);
    dispatch({ type: LIKE_SUCCESS, payload})
    console.log(payload)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
  } catch (err) {
    //console.log(err)
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};

<<<<<<< HEAD
export const getMessageListByUser = (msgParams,username) => async (dispatch, getState) => {
  try {
    const payload = await api.getMessageListByUser(msgParams,username);
    dispatch({ type: GET_MESSAGE_LIST_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
=======
export const likes = (messageId) => async (dispatch, getState) => {
  return dispatch(_likes(messageId))
  .then(() => {return dispatch(getMessageList({limit: 100, offset: 0}))})
};

export const _deleteLikes = (id) => async (dispatch, getState) => {
  //console.log(likeId)
  try {
    dispatch({ type: DELETE_LIKE });
    const payload = await api.deleteLikes(id);
    dispatch({ type: DELETE_SUCCESS, payload})
    console.log(payload)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
  } catch (err) {
    //console.log(err)
    dispatch({
      type: LIKE_FAILURE,
>>>>>>> 67a89c09974e240a0fc4e5eacd84d6840d6ebe15
      payload: err.message,
    });
  }
};

<<<<<<< HEAD
  export const deleteMessage = (messageId) => async (dispatch, getState) => {
    try {
      
      const payload = await api.deleteMsg(messageId);
        console.log(payload)
      dispatch({ type: DELETE_MESSAGE, payload });
    } catch (err) {
      dispatch({
        type: FAILURE,
        payload: err.message,
      });
    }
  };
=======
export const deleteLikes = (id) => async (dispatch, getState) => {
  return dispatch(_deleteLikes(id))
  .then(() => {return dispatch(getMessageList({limit: 100, offset: 0}))})
};

>>>>>>> 67a89c09974e240a0fc4e5eacd84d6840d6ebe15
