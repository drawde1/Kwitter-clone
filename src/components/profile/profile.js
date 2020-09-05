import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPicture } from "../../redux/actions/photos";
import { Loader } from "../loader";
import { useRef } from "react";
import Api from "../../utils/api";
import { user } from "../../redux/actions";
import { getUserInfo } from "../../redux/actions";
//import "./LoginForm.css";
import { Message } from "../feed/Message";

export const Picture = () => {
  const { username, userPicture, userInfo, messageList } = useSelector(
    state => ({
      username: state.auth.username,
      userPicture: state.getUser.pictureLocation,
      userInfo: state.getUser,
      messageList: state.getMessageList.messages,
    })
  );

  const dispatch = useDispatch();
  const picture = useRef(null);

  const handleGetUser = username => {
    dispatch(getUserInfo(username));
    console.log(userInfo);
  };
  //    handleGetUser()
  //   useEffect(handleGetUser(username))

  const addPic = async event => {
    event.preventDefault();
    //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
    //dispatch(getPicture(state))
    const picdata = new FormData(picture.current);
    const results = await Api.addPicture(username, picdata);
    dispatch(getUserInfo(username));
  };

  // const setPic = async (event) => {
  //   event.preventDefault();
  //   //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
  //   dispatch(setPicture(state))

  // };
  // const yourMessages = messageList.filter(
  //   message => message.username === username
  // );

  return (
    <React.Fragment>
      <h1>Profile Page</h1>

      <img
        src={"https://kwitter-api.herokuapp.com" + userPicture}
        width='200'
        height='200'
      />
      <form ref={picture} onSubmit={addPic}>
        <input type='file' name='picture'></input>
        <button type='submit'>upload picture</button>
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}

      {/* {console.log(state.formData)} */}

      <label htmlFor='username'>Username</label>
      <h2>your messages</h2>
      {/* {yourMessages.map(message => (
        <Message
          text={message.text}
          username={message.username}
          msgId={message.id}
          key={message.id}
          likes={message.likes}
          createdAt={message.createdAt}
        />
      ))} */}
    </React.Fragment>
  );
};
