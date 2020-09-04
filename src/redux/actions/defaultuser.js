import api from "../../utils/api";

export const ADD_USER = "ADD_USER";
export const FAILURE = "FAILURE";
export const LOAD = "LOAD";
export const DELETE_USER = "DELET_USER";

export const adduser = credentials => async (dispatch, getState) => {
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
export const deleteuser = credentials => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD });
    const payload = await api.deleteuser(credentials);

    dispatch({ type: DELETE_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
    const userName = getState().auth.login.result.username;
    const payload = await api.deleteuser(userName);
    <button onClick={(deleteuser) => (user.id)> Delete User</button>

}
  }}