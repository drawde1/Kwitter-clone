// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import { Message } from "./Message";
//import { DeleteMessage } from "../delete";
// @ts-ignore
import { createTimestamp } from "../../functions/createTimestamp";

export const Feed = () => {
  const { messageList } = useSelector(state => ({
    id: state.addMsg.id,
    text: state.addMsg.text,
    likes: state.addMsg.likes,
    messageList: state.getMessageList.messages,
    createdAt: state.addMsg.createdAt,
  }));
  // 2020-09-03T14:27:16.454Z
  const msgListParams = {
    limit: 10,
    offset: 0,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageList(msgListParams));
  }, []);

  const initialState = {
    text: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = event => {
    let inputValue = event.target.value;
    setState(prevState => ({ ...prevState, text: inputValue }));
  };
  const postMessage = event => {
    event.preventDefault();
    dispatch(addMessage(state));
    dispatch(getMessageList(msgListParams));
  };

  return (
    <React.Fragment>
      <form id='login-form' onSubmit={postMessage}>
        <label htmlFor='msg'>say something</label>
        <input
          type='text'
          name='msg'
          value={state.msg}
          autoFocus
          required
          onChange={handleChange}
        />
        <button type='submit'>send</button>
        <div>//////test///// //////test/////</div>
      </form>
    </React.Fragment>
  );
};
