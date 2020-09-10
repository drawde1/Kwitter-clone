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
import {getMessageList} from '../../redux/actions'
import "./scrollbox.css"



export const Profile = () => {

  const INITIALSTATE = {
    // username: "",
    displayName: "",
    about: "",
    password: ""
  }
  
  const [state, setState] = useState({INITIALSTATE});
  
  const{username,userPicture,userInfo,messageList, name, bio } = useSelector((state)=>
  ({
    username: state.auth.username,
    userPicture: state.getUser.pictureLocation,
    userInfo:  state.getUser,
    messageList: state.getMessageList.messages,
    name: state.getUser.displayName,
    bio: state.getUser.about
  }))
  console.log(state)
  const dispatch = useDispatch();
  const picture = useRef(null);
  // const updateinfo = useRef(null);
  const msgListParams =
  {
    limit: 10,
    offset: 0
  }
  useEffect(()=>{dispatch(getMessageList(msgListParams))},[])
  useEffect(()=>{dispatch(getUserInfo(username))},[])
  // const handleGetUser = (username) =>
  
  
  const addPic = async (event) => {
    event.preventDefault();
    const picdata = new FormData (picture.current)
    const results = await Api.addPicture( username, picdata )
    dispatch(getUserInfo(username))
  };
  const yourMessages = messageList.filter((message)=>message.username === username)
  useEffect(()=>{
    dispatch(getMessageList(msgListParams))
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

   const setPic = async (event) => {
     event.preventDefault();
     //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
     //dispatch(setPicture(state))
     const picdata = new FormData (picture.current)
      const results = await Api.getPictures( username, picdata )
      console.log(picdata)
      console.log(results)
   
   };
  return (
    <React.Fragment>
        
        <h1>Profile Page</h1>
        <img 
        src = {"https://kwitter-api.herokuapp.com"+userPicture}
        width="200" 
        height="200"/>
      <form ref={picture} onSubmit = {addPic}>
       <input type="file" name="picture">
        </input>
        <button type="submit">upload picture</button> 
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}
      
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
                <button type="submit">Update Info</button> 
            </form>
        <div>{state.displayName}</div>
        <div>{state.password}</div>
        <div>{state.bio}</div>
        <div>{userPicture}</div>
        <h2>your messages</h2>
        <div className= 'scrollBox'>
        
          {yourMessages.map((message) => (
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