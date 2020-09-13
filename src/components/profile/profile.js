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
    displayName: "",
    about: "",
    password: "",
  };

  const [state, setState] = useState(INITIALSTATE);
  const [isToggled, setToggle] = useState({isToggled:false});
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
    loadingUserInfo,
    loadingMsg,
  } = useSelector(state => ({
    loadingUserInfo:state.getUser.loading,
    loadingMsg: state.getMessageListByUser.loading,
    startingUsername: state.auth.username,
    testPicture: state.pic.photo,
    username: state.getUser.username,
    userPicture: state.getUser.pictureLocation,
    userInfo:  state.getUser,
    name: state.getUser.displayName,
    bio: state.getUser.about,
    count: state.getMessageListByUser.count,
    messageList: state.getMessageListByUser.messages,
    msgListParams: state.infiniteScroll,
  }))
  
  const dispatch = useDispatch();
  const picture = useRef(null);

  useEffect(()=>{dispatch(getMessageListByUser({limit:10, offset:0},startingUsername))},[])
  useEffect(()=>{dispatch(getUserInfo(startingUsername))},[])
  useEffect(()=>{dispatch(restInfiniteScroll(0))},[])

  const addPic = async (event) => {
    event.preventDefault();
    const picdata = new FormData (picture.current);
    const results = await Api.addPicture( username, picdata );
    dispatch(getUserInfo(username));
  };

  
  const deleteTheUser = () => {
    dispatch(deleteUser(username));
  };
 
  
  useEffect(()=>{
    dispatch(getMessageListByUser(msgListParams,username))
  
  },[])
  
  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(updateuser({...state,username}));
    setToggle((prevState)=> ({...prevState,isToggled:false}))
    
  }

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  

  const handleScroll = (event) =>
  {
      
    const {scrollHeight,clientHeight,scrollTop} = event.currentTarget
    if(clientHeight + scrollTop >= scrollHeight && msgListParams.offset < count)
    {
      
      dispatch(infiniteScroll(5))
      
      dispatch(getMessageListByUser(msgListParams,username))
    }
  }
  
   const handleToggle = () =>
   {
        setToggle((prevState)=> ({...prevState,isToggled:true}))
        setState((prevState)=> ({...prevState,INITIALSTATE}))
   }
 


  
  return (
    <React.Fragment>
      <div id="bigsplit">
      <div id="smallsplit">
        {loadingUserInfo && <Loader/>}
        <div class="ui card">
          <div class="image">
            <img id="image2"
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
      <button onClick = {handleToggle}className={isToggled.isToggled?"hidden":"show"}>edit profile</button>
      <div className ={!isToggled.isToggled?"hidden":"show"}>
      <form ref={picture} onSubmit={addPic}>
        <input type='file' name='picture'></input>
        <button type='submit'>Upload My Picture</button>
      </form>
      
      <form id="update-form" onSubmit={handleUpdate}>
          <div>Current Name: {name}</div>
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
          <div>Current Password: {}</div>
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
          <div>Current Bio: {bio}</div>
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
        </div>
        </div>
      <div>
        <div id="msgtitle">
        <center><h2>Your Messages</h2></center>
        </div>
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
      </div>
      </div>
    </React.Fragment>
  );
}
