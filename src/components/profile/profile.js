import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./Profile.css";
import {updateuser} from "../../redux/actions/user";
import { getPicture } from "../../redux/actions/photos";
import { useRef } from "react";
import Api from "../../utils/api"
import { getUserInfo} from '../../redux/actions'
import {Message} from '../feed/Message'
import {infiniteScroll} from '../../redux/actions/infiniteScroll'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import {getMessageListByUser} from '../../redux/actions'
import 'semantic-ui-css/semantic.min.css'
import {deleteUser} from '../../redux/actions/user'


export const Profile = () => {
  const INITIALSTATE = {
    displayName: "",
    about: "",
    password: "",
  };

  const [state, setState] = useState(INITIALSTATE);

  const {
    username,
    startingUsername,
    userPicture,
    messageList,
    bio,
    name,
    msgListParams,
    testPicture,
    count,
    userInfo,
  } = useSelector(state => ({
    startingUsername: state.auth.username,
    testPicture: state.pic.photo,
    username: state.getUser.username,
    userPicture: state.getUser.pictureLocation,
    userInfo:  state.getUser,
    name: state.getUser.displayName,
    bio: state.getUser.about,
    messageList: state.getMessageListByUser.messages,
    msgListParams: state.infiniteScroll,
  }))
  console.log(state)
  const dispatch = useDispatch();
  const picture = useRef(null);

  useEffect(()=>{dispatch(getMessageListByUser(msgListParams,startingUsername))},[])
  useEffect(()=>{dispatch(getUserInfo(startingUsername))},[])
  useEffect(()=>{dispatch(restInfiniteScroll(10))},[])

  const addPic = async (event) => {
    event.preventDefault();
    const picdata = new FormData (picture.current)
    const results = await Api.addPicture( username, picdata )
    dispatch(getUserInfo(username))
  };

  
  const deleteTheUser = () => {
    dispatch(deleteUser(username));
    console.log('??')
  };
 
  
  useEffect(()=>{
    dispatch(getMessageListByUser(msgListParams,username))
  
  },[])

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateuser({...state,username}));
  }

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const setPic = async event => {
    event.preventDefault();
    const picdata = new FormData(picture.current);
    const results = await Api.getPictures(username, picdata);
  };

  const handleScroll = event => {
    const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
    if (clientHeight + scrollTop >= scrollHeight) {
      dispatch(infiniteScroll(5));
      dispatch(getMessageListByUser(msgListParams, username));
    }
  };

  const test = () =>
  {
    dispatch(getPicture(username))
    console.log(testPicture)
  }
  
  return (
    <React.Fragment>
        <img 
        src = {"https://kwitter-api.herokuapp.com"+userPicture}
        height="200" />
      <form ref={picture} onSubmit = {addPic}>
       <input type="file" name="picture">
        </input>
        <button type="submit">upload picture</button> 
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}
      
        <form id="update-form" onSubmit={handleUpdate}>
  
          <label htmlFor="displayName">New Name:</label>
          <input
              type="text"
              name="displayName"
              value={state.displayName}
              autoFocus
              required
              onChange={handleChange}
          />
          <br/>
          <label htmlFor="password">New Password:</label>
          <input
              type="text"
              name="password"
              value={state.password}
              autoFocus
              required
              onChange={handleChange}
          />
          <br/>
          
          <label htmlFor="about">New Bio:</label>
          <input
            type="text"
            name="about"
            value={state.about}
            autoFocus
            required
            onChange={handleChange}
          />
          <br/>
          <button onClick={()=>updateuser(state.displayName, state.password, state.about, username)} type="submit">
          Update Profile
          </button> 
        </form>

        <h2>your messages</h2>
      <button onClick ={() => deleteTheUser()}>delete Account</button>
      {/* <label htmlFor="username">Username</label> */}
      <h2>your messages</h2>
      <div className= 'scrollBox' onScroll ={handleScroll}>
        {messageList.map((message) => (
                <Message text={message.text} 
                username={message.username}
                msgId ={message.id}
                key = {message.id} 
                likes = {message.likes}
                createdAt ={message.createdAt}
                />
                ))}
      </div>
    </React.Fragment>
  );
}
