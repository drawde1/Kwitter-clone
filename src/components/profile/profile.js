import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPicture } from "../../redux/actions/photos";
import { Loader } from "../loader";
import { useRef } from "react";
import Api from "../../utils/api";
import { user } from "../../redux/actions";
import { deleteUser } from "../../redux/actions";
import { getUserInfo } from "../../redux/actions";
//import "./LoginForm.css";
import { Message } from "../feed/Message";

export const Picture = () => {
  //   const { username, userPicture, userInfo, messageList } = useSelector(
  //     state => {
  //username: state..username,
  // userPicture: state.getUser.pictureLocation,
  // userInfo: state.getUser,
  // messageList: state.getMessageList.messages,
  //   }
  // );

  //let stateOfReducer = useSelector(state => state.pic);
  const dispatch = useDispatch();
  const picture = useRef(null);

  const handleGetUser = username => {
    dispatch(getUserInfo(username));
  };

  const deleteTheUser = () => {
    dispatch(deleteUser(user));
  };
  const addPic = async event => {
    event.preventDefault();
    //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
    //dispatch(getPicture(state))
    const picdata = new FormData(picture.current);
    const results = await Api.addPicture(user, picdata);
    dispatch(getUserInfo(user));
  };

  // const setPic = async (event) => {
  //   event.preventDefault();
  //   //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
  //   dispatch(setPicture(state))

  // };
  //const yourMessages = messageList.filter((message)=>message.username === username)

  return (
    <React.Fragment>
      <h1>Profile Page</h1>
      <img
        src={
          "https://kwitter-api.herokuapp.com/users/{username}/picture" + Picture
        }
        width='200'
        height='200'
      />
      <form ref={picture} onSubmit={addPic}>
        <input type='file' name='picture'></input>
        <button type='submit'>upload picture</button>
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}
      {/* {console.log(state.formData)} */}
      <img
        srcSet={
          "https://kwitter-api.herokuapp.com/users/{username}/picture" + Picture
        }
        alt='photo'
        width='200'
        height='200'
      ></img>
      <label htmlFor='username'>Username</label>
      <h2>Your Kwitts</h2>
      {/*yourMessages.map((message) => (
                <Message text={message.text} 
                username={message.username}
                msgId ={message.id}
                key = {message.id} 
                likes = {message.likes}
                createdAt ={message.createdAt}
                />
        ))*/}
      <button onClick={deleteTheUser}>Delete Profile</button>;
    </React.Fragment>
  );
};
