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

import {deleteUser} from '../../redux/actions/user'


export const Profile = () => {
  const INITIALSTATE = {
    // username: "",
    displayName: "",
    about: "",
    password: "",
  };

  const [state, setState] = useState({ INITIALSTATE });

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

  useEffect(()=>{dispatch(getMessageListByUser({limit:10, offset:0},startingUsername))},[])
  useEffect(()=>{dispatch(getUserInfo(startingUsername))},[])
  useEffect(()=>{dispatch(restInfiniteScroll(0))},[])

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
      <h1>Profile Page</h1>

     {/* <button onClick= {test}>test</button> */}
      
 
        <h1>Profile Page</h1>
        <div class="ui card">
          <div class="image">
            <img 
          src = {userPicture?"https://kwitter-api.herokuapp.com" + userPicture:'/kwitter-user.png'}
          width="200" 
          height="200"/>
        </div>
       
      <div class="content">
        <a class="header">{name}</a>
        <div class="meta">
          <span class="date">SE April 2020</span>
        </div>
        <div class="description">
          {bio}
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="envelope icon"></i>
          {count}
        </a> 
            <button class="ui right floated button" onClick ={() => deleteTheUser()}>Delete Account</button>
      </div>
      </div>
      <form ref={picture} onSubmit={addPic}>
        <input type='file' name='picture'></input>
        <button type='submit'>Upload My Picture</button>
      </form>
        <h2>your messages</h2>
        <div className= 'scrollBox' onScroll ={handleScroll}>
          {messageList.map((message) => (
                  <Message text={message.text} 
                  username={message.username}
                  msgId ={message.id}
                  key = {message.id} 
                  likes = {message.likes}
                  createdAt ={message.createdAt}
                  profile ={true}
                  />
                  ))}
        </div>
    </React.Fragment>
  );
}
