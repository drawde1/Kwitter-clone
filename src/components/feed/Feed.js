import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
//import { IncrementClick, RemoveClick, ToggleSelection } from '../likes'

import { Message } from "./Message";
import { createTimestamp } from "../../functions/createTimestamp";

export const Feed = props => {
  const { id, text, likes, messageList, createdAt } = useSelector(state => ({
    id: state.addMsg.id,
    text: state.addMsg.text,
    likes: state.addMsg.likes,
    messageList: state.getMessageList.messages,
    createdAt: state.addMsg.createdAt,
  }));
  // 2020-09-03T14:27:16.454Z
  const msgListParams = {
    limit: 100,
    offset: 0,
  };
  const dispatch = useDispatch();

  const initialState = {
    text: "",
    clicks: 0,
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
    // console.log(messageList[0].createdAt);
  };

  return (
    <React.Fragment>
      <form id='login-form' onSubmit={postMessage}>
        <label htmlFor='msg'>Post A Kwitt</label>
        <input
          type='text'
          name='msg'
          value={state.msg}
          autoFocus
          required
          onChange={handleChange}
        />

        <button type='submit'>send</button>
        <div>
          <p> {id}</p>
          <p>{text}</p>
        </div>
      </form>
      <br />

      {/* {props.message.map(Message (
        <Message
          text={Message.text}
          username={Message.username}
          msgId={Message.id}
          key={Message.id}
          likes={Message.likes}
          createdAt={Message.createdAt}
        />
      )) */}
    </React.Fragment>
  );
};
