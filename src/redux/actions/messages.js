import api from "../../utils/api";
import { FAILURE } from "./defaultuser";
import { Message } from "semantic-ui-react";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_LIKE = "ADD_LIKE";
export const GET_MESSAGE_LIST = "GET_MESSAGE_LIST";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
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
// <button onClick={event => { handledeleteMessage(message.id) }> {' '} Delete Message </button>
//  return  (messageid): deleteMessage.filter(message => message.id !== action.payload) }
//  }
