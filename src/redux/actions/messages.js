import api from "../../utils/api";
export const DELETE_MESSAGE_LOAD = 'DELETE_MESSAGE_LOAD';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const DELETE_MESSAGE_FAIL = 'DELETE_MESSAGE_FAIL';
export const ADD_MESSAGE= 'ADD_MESSAGE'
export const ADD_MESSAGE_FAIL= 'ADD_MESSAGE_FAIL'
export const ADD_MESSAGE_LOAD= 'ADD_MESSAGE_LOAD'
export const ADD_LIKE = 'ADD_LIKE'
export const DELETE_LIKE = 'DELETE_LIKE'
export const GET_MESSAGE_LIST_LOAD = 'GET_MESSAGE_LIST_LOAD'
export const GET_MESSAGE_LIST_FAIL = 'GET_MESSAGE_LIST_FAIL'
export const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST'
export const LIKE_FAILURE = 'LIKE_FAILURE'
export const LIKE_SUCCESS = 'LIKE_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'
export const GET_MESSAGE_LIST_USER_LOAD = 'GET_MESSAGE_LIST_USER_LOAD'
export const GET_MESSAGE_LIST_USER_FAIL = 'GET_MESSAGE_LIST_USER_FAIL'
export const GET_MESSAGE_LIST_USER= 'GET_MESSAGE_LIST_USER'

export const _addMessage= (text) => async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_MESSAGE_LOAD});
      const payload = await api.addMessage(text);
        
      dispatch({ type: ADD_MESSAGE, payload });
    } catch (err) {
      dispatch({
        type: ADD_MESSAGE_FAIL,
        payload: err.message,
      });
    }
  };
  export const addMessage = (text) => async (dispatch, getState) => {
    return dispatch(_addMessage(text))
    .then(() => {return dispatch(getMessageList({limit:10, offset:0}))})
  };

  export const getMessageList = (msgParams) => async (dispatch, getState) => {
    try {
      dispatch({ type: GET_MESSAGE_LIST_LOAD})
      const payload = await api.getMessageList(msgParams);
      dispatch({ type: GET_MESSAGE_LIST, payload });
    } catch (err) {
      dispatch({
        type:GET_MESSAGE_LIST_FAIL,
        payload: err.message,
      });
    }
  };



export const _likes = (messageId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_LIKE });
    const payload = await api.likes(messageId);
    dispatch({ type: LIKE_SUCCESS, payload})
  } catch (err) {
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};

export const getMessageListByUser = (msgParams,username) => async (dispatch, getState) => {
  try {
    dispatch({ type:GET_MESSAGE_LIST_USER_LOAD});
    const payload = await api.getMessageListByUser(msgParams,username);
    dispatch({ type: GET_MESSAGE_LIST_USER, payload });
  } catch (err) {
    dispatch({
      type: GET_MESSAGE_LIST_USER_FAIL,
      payload: err.message,
    });
  }
};
export const likes = (messageId,msgParams) => async (dispatch, getState) => {
  return dispatch(_likes(messageId))
  .then(() => {return dispatch(getMessageList(msgParams))})
};

export const profileLikes = (messageId,msgParams, username) => async (dispatch, getState) => {
  return dispatch(_likes(messageId))
  .then(() => {return dispatch(getMessageListByUser(msgParams, username))})
};
export const profileDeleteLikes = (id,msgParams,username) => async (dispatch, getState) => {
  return dispatch(_deleteLikes(id))
  .then(() => {return dispatch(getMessageListByUser(msgParams, username))})
};
export const _deleteLikes = (id,msgParams) => async (dispatch, getState) => {
  
  try {
    dispatch({ type: DELETE_LIKE });
    const payload = await api.deleteLikes(id);
    dispatch({ type: DELETE_SUCCESS, payload})
  } catch (err) {
    dispatch({
      type: DELETE_FAILURE,
      payload: err.message,
    });
  }
};
export const deleteLikes = (id,msgParams) => async (dispatch, getState) => {
  return dispatch(_deleteLikes(id))
  .then(() => {return dispatch(getMessageList(msgParams))})
};

export const _deleteMessage = (messageId) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_MESSAGE_LOAD})
      const payload = await api.deleteMsg(messageId);
        console.log(payload)
      dispatch({ type: DELETE_MESSAGE, payload });
    } catch (err) {
      dispatch({
        type: DELETE_MESSAGE_FAIL,
        payload: err.message,
      });
    }
  };
  export const deleteMessage = (messageId,msgParams) => async (dispatch, getState) => {
    return dispatch(_deleteMessage(messageId))
    .then(() => {return dispatch(getMessageList(msgParams))})
  };

  export const profileDeleteMessage = (messageId,msgParams,username) => async (dispatch, getState) => {
    return dispatch(_deleteMessage(messageId))
    .then(() => {return dispatch(getMessageListByUser(msgParams,username))})
  };

