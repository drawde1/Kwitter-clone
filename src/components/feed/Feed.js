import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import { Message } from "./Message";
import { Loader } from "../loader/Loader";
import { restInfiniteScroll } from "../../redux/actions/infiniteScroll";
import "./Message.css";
import { infiniteScroll } from "../../redux/actions/infiniteScroll";

export const Feed = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessageList(msgListParams));
  }, []);
  useEffect(() => {
    dispatch(restInfiniteScroll(10));
  }, []);
  const { messageList, loadingList, msgListParams } = useSelector(state => ({
    msgListParams: state.infiniteScroll,
    messageList: state.getMessageList.messages,
    loadingList: state.getMessageList.loading,
  }));

  const initialState = {
    text: "",
    isActive: false,
  };
  const [state, setState] = useState(initialState);

  const handleChange = event => {
    let inputValue = event.target.value;
    setState(prevState => ({ ...prevState, text: inputValue }));
  };
  const postMessage = event => {
    event.preventDefault();
    dispatch(addMessage(state, msgListParams));
  };

  const handleScroll = event => {
    const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
    if (clientHeight + scrollTop >= scrollHeight - 30) {
      console.log("end");
      dispatch(infiniteScroll(5));
      dispatch(getMessageList(msgListParams));
    }
  };
  return (
    <React.Fragment>
      <form id='feed' onSubmit={postMessage}>
        <label htmlFor='msg'></label>
        <input
          type='text'
          name='msg'
          value={state.msg}
          autoFocus
          required
          onChange={handleChange}
        />
        <button type='submit'>send</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      {loadingList && <Loader />}
      <div className='scrollBox' onScroll={handleScroll}>
        {messageList.map(message => (
          <Message
            text={message.text}
            username={message.username}
            msgId={message.id}
            key={message.id}
            likes={message.likes}
            createdAt={message.createdAt}
            userPhoto={message.pictureLocation}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
