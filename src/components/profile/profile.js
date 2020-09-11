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
//import "./LoginForm.css";
import {Message} from '../feed/Message'
import {infiniteScroll} from '../../redux/actions/infiniteScroll'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import {getMessageListByUser} from '../../redux/actions'
import "./scrollbox.css"
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
    userPicture,
    userInfo,
    messageList,
    bio,
    name,
    msgListParams,
    testPicture,
    count,
    userInfo,
  } = useSelector(state => ({
    testPicture: state.pic.photo,
    username: state.getUser.username,
    userPicture: state.getUser.pictureLocation,
    userInfo:  state.getUser,
    messageList: state.getMessageList.messages,
    name: state.getUser.displayName,
    bio: state.getUser.about,
    count: state.getMessageList.count,
    messageList: state.getMessageListByUser.messages,
    msgListParams: state.infiniteScroll,
  }))

  const dispatch = useDispatch();
  const picture = useRef(null);
  // const msgListParams =
  // {
  //   limit: 10,
  //   offset: 0
  // }

  useEffect(()=>{dispatch(getMessageListByUser(msgListParams,username))},[])
  useEffect(()=>{dispatch(getUserInfo(username))},[])
  useEffect(()=>{dispatch(restInfiniteScroll(10))},[])
  // const handleGetUser = (username) =>
  // restInfiniteScroll 



  
  const addPic = async (event) => {
    event.preventDefault();
  
    const picdata = new FormData (picture.current)
    const results = await Api.addPicture( username, picdata )
    dispatch(getUserInfo(username))
  };

  
  const deleteTheUser = () => {
    dispatch(deleteUser(username));
    console.log('??')
    // dispatch(dispatch(actions.logout()))
  };
 
  
  
  useEffect(()=>{
    dispatch(getMessageListByUser(msgListParams,username))
  
  },[])
  



// export const Picture = () => {

  const setPic = async event => {
    event.preventDefault();
    //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
    //dispatch(setPicture(state))
    const picdata = new FormData(picture.current);
    const results = await Api.getPictures(username, picdata);
    // console.log(picdata);
    // console.log(results);
  };
  const handleScroll = event => {
    const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
    // console.log('scrollHeight',scrollHeight)
    // console.log('clientHeight',clientHeight)
    // console.log('scrollTop',scrollTop)
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
      <img
        src={"https://kwitter-api.herokuapp.com" + userPicture}
        width='200'
        height='200'
      />
      
     <button onClick= {test}>test</button>
      <form ref={picture} onSubmit={addPic}>
        <input type='file' name='picture'></input>
        <button type='submit'>Upload My Picture</button>
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}

        
        <h1>Profile Page</h1>
        <div class="ui card">
          <div class="image">
            <img 
          src = {"https://kwitter-api.herokuapp.com"+userPicture}
          width="200" 
          height="200"/>
        </div>
        
      {/* <form ref={picture} onSubmit = {addPic}>
       <input type="file" name="picture">
        </input>
        <button type="submit">upload picture</button> 
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}
      {/* {console.log("State.action")} */}
  

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
        
      {/* {console.log(state.formData)} */}
      {/* <button onClick ={() => deleteTheUser()}>delete Account</button> */}
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
                  profile = {true}
                  />
                  ))}
        </div>
    </React.Fragment>
  );
  }
