import api from "../../utils/api";
export const LIKES = "LIKES";
export const LIKE_FAILURE = "LIKE_FAILURE";
export const LIKE_SUCCESS = "LIKE_SUCCESS";


export const like = (messageId) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIKES });
    const payload = await api.likes(messageId);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: LIKE_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LIKE_FAILURE,
      payload: err.message,
    });
  }
};