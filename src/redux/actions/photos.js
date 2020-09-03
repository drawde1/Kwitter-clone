import api from "../../utils/api";

export const ADD_PICTURE = "USER_PICTURE";
export const UPDATE_PICTURE = "UPDATE_PICTURE";
export const NO_PICTURE = "NO_PICTURE"


export const getPicture = (credentials) => async (dispatch, getState) => {
    try {
        const payload = await api.addPicture(credentials);
        console.log(payload)
        dispatch({ type: ADD_PICTURE, payload });
     //   dispatch({ type: UPDATE_PICTURE, payload });
    } catch (err) {
        dispatch({type: NO_PICTURE, payload: err.message})
    }
}