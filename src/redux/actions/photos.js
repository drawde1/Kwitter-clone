import api from "../../utils/api";

export const ADD_PICTURE = "USER_PICTURE";
export const UPDATE_PICTURE = "UPDATE_PICTURE";
export const NO_PICTURE = "NO_PICTURE"


export const getPicture = (username) => async (dispatch, getState) => {
    try {
        const payload = await api.getPictures(username);
        console.log(payload)
            return {
                type: ADD_PICTURE, payload
            }
    } catch (err) {
        console.log("err")
    }
}

export const setPicture = (credentials) => async (dispatch, getState) => {
    try {
        const payload = await api.getPictures(credentials);
        console.log(payload)
            return {
                type: UPDATE_PICTURE
            }
    } catch (err) {
        console.log("err")
    }
}