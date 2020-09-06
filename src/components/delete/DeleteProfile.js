import api from "../../utils/api";
import { GET_USER, FAILURE } from "../../redux/actions";
import React from "react";

export const DELETE_PROFILE = "DELETE_PROFILE";
export const deleteUser = username => async dispatch => {
  try {
    const payload = await api.deleteuser(username);
    console.log(payload);
    dispatch({ type: deleteUser, payload });
    dispatch({ type: GET_USER, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }

  return <button onClick={() => {}}>Delete Profile</button>;
};
