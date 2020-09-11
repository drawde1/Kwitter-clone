import api from "../../utils/api";

export const GET_PICTURE = "GET_PICTURE";
export const FAIL_PICTURE = "UPDATE_PICTURE";
export const LOAD_PICTURE = "NO_PICTURE";

export const getPicture = username => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_PICTURE });
    const payload = await api.getPictures(username);
    console.log(payload);
    dispatch({ type: GET_PICTURE, payload });
  } catch (err) {
    dispatch({ type: FAIL_PICTURE });
    console.log("err");
  }
};
