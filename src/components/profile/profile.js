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
import {messageList} from '../feed/Feed'
import { user } from "../../redux/actions";

export const Profile = () => {
    const {username, name, about} = useSelector((state) => ({
        username: state.getUser.username,
        name: state.getUser.displayname,
        about: state.getUser.about
    }));
  console.log(name)
    const dispatch = useDispatch();

    const INITIALSTATE = {
        password: "", 
        about: "",
        displayname: "",
    }

    const [state, setState] = useState({INITIALSTATE});

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateuser({...state, username}));
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    };

    return (
        <React.Fragment>
            <form id="update-form" onSubmit={handleUpdate}>
                <div>Current Name: {name}</div>
                <label htmlFor="displayname">New Name:</label>
                <input
                    type="text"
                    name="displayname"
                    value={state.displayname}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br/>
                <div>Current Password: {}</div>
                <label htmlFor="username">New Password:</label>
                <input
                    type="text"
                    name="username"
                    value={state.password}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br/>
                <div>Current Bio: {about}</div>
                <label htmlFor="displayname">New Bio:</label>
                <input
                    type="text"
                    name="about"
                    value={state.about}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">
                    Update Profile
                </button>
            </form>
        </React.Fragment>
    )
}
//import "./LoginForm.css";



// export const Picture = () => {

//   const { username,userPicture,userInfo,messageList } = useSelector((state)=>
//   ({
//     username: state.auth.username,
//     userPicture: state.getUser.pictureLocation,
//     userInfo:  state.getUser,
//     messageList: state.getMessageList.messages,
//   }))

//   const dispatch = useDispatch();
//   const picture = useRef(null);


//   const handleGetUser = (username) =>
//   {
//     dispatch(getUserInfo(username))
//     console.log(userInfo)
//   }
// //    handleGetUser()
// //   useEffect(handleGetUser(username))


  
//   const addPic = async (event) => {
//     event.preventDefault();
//     //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
//     //dispatch(getPicture(state))
//     const picdata = new FormData (picture.current)
//     const results = await Api.addPicture( username, picdata )
//     dispatch(getUserInfo(username))
//   };

  
//   // const setPic = async (event) => {
//   //   event.preventDefault();
//   //   //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
//   //   dispatch(setPicture(state))
   
//   // };
  
//   const yourMessages = messageList.filter((message)=>message.username === username)

//   // return (
//   //   <React.Fragment>
      
//   //       <h1>Profile Page</h1>

//   //       <img 
//   //       src = {"https://kwitter-api.herokuapp.com"+userPicture}
//   //       width="200" 
//   //       height="200"
//   //       />
//   //       <form ref={picture} onSubmit = {addPic}>
//   //         <input type="file" name="picture"></input>
//   //         <button type="submit">upload picture</button> 
//   //      </form>
//   //     {/* <button  onClick={addPicChange}>Change Picture</button> */}
      
//   //     {/* {console.log(state.formData)} */}

//   //       <label htmlFor="username">Username</label>
//   //       <h2>your messages</h2>
//   //       {yourMessages.map((message) => (
//   //               <Message text={message.text} 
//   //               username={message.username}
//   //               msgId ={message.id}
//   //               key = {message.id} 
//   //               likes = {message.likes}
//   //               createdAt ={message.createdAt}
//   //               />
//   //               ))}
//   //   </React.Fragment>
//   // );
//   // }
//