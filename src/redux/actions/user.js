import api from "../../utils/api";

export const ADD_USER = "ADD_USER";
export const FAILURE = "FAILURE";
export const LOAD = "LOAD";
export const DELETE_USER = "DELETE_USER";
export const GET_USER = "GET_USER";

export /**
 * @param {{ INITIALSTATE?: { username: string; displayName: string; password: string; }; username?: any; displayname?: any; password?: any; }} credentials
 */
const /**
   * @param {(arg0: { type: string; payload?: any; }) => void} dispatch
   * @param {any} getState
   */
  user = credentials => async (dispatch, getState) => {
    try {
      dispatch({ type: LOAD });
      const payload = await api.adduser(credentials);
      console.log(payload);

      dispatch({ type: ADD_USER, payload });
    } catch (err) {
      dispatch({
        type: FAILURE,
        payload: err.message,
      });
    }
  };

export /**
 * @param {(credentials: any) => (dispatch: any, getState: any) => Promise<void>} username
 */
const /**
   * @param {(arg0: { type: string; payload?: any; }) => void} dispatch
   * @param {any} getState
   */
  getUserInfo = username => async (dispatch, getState) => {
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

export /**
 * @param {(credentials: any) => (dispatch: any, getState: any) => Promise<void>} username
 */
const /**
   * @param {(arg0: { type?: string; payload: any; }) => void} dispatch
   */
  deleteUser = username => async dispatch => {
    try {
      const payload = await api.deleteUser(username);
      console.log(payload);
      dispatch({ type: DELETE_USER, payload });
    } catch (err) {
      dispatch({
        payload: err.message,
      });
    }
  };
