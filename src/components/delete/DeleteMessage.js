import api from "../../utils/api";
import React from "react";
import { Message } from "semantic-ui-react";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const FAILURE = "FAILURE";
export function DeleteMessage () {
  const deleteMessage = async () => {
    const dispatch = deleteMessage();
    const result = await this.axiosInstance.delete("/messageid" + Message, {});
  };

  return (
    <button
      onClick={() => {
        console.log("Message Deleted");
      }}
    >
      Delete Message
    </button>
  );
}
export const deleteMessage = text => async (dispatch, getState) => {
  try {
    const payload = await api.deleteMessage(text);

    dispatch({ type: DELETE_MESSAGE, payload });
  } catch (err) {
    dispatch({
      type: FAILURE,
      payload: err.message,
    });
  }
};
