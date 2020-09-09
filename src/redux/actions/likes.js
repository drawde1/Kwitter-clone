import api from "../../utils/api";
import { connect } from "react-redux";
import actions from "redux-form/lib/actions";

export const LIKES = "LIKES";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAILURE = "LIKE_FAILURE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const likes = messageId => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKES });
    const payload = await api.likes(messageId);
    console.log(payload);
    dispatch({ type: LIKE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};
