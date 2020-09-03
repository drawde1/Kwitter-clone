import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPicture } from "../../redux/actions/photos";
import { Loader } from "../loader";
import { useRef } from "react";
import Api from "../../utils/api"
import { user } from "../../redux/actions";
import { getUserInfo} from '../../redux/actions'
//import "./LoginForm.css";


export const Picture = () => {

  const{username,userPicture,userInfo } = useSelector((state)=>
  ({
    username: state.auth.username,
    userPicture: state.getUser.pictureLocation,
    userInfo:  state.getUser
  }))

  const dispatch = useDispatch();
  const picture = useRef(null);
  

  const handleGetUser = (username) =>
  {
    dispatch(getUserInfo(username))
    console.log(userInfo)
  }
//    handleGetUser()
//   useEffect(handleGetUser(username))


  
  const addPic = async (event) => {
    event.preventDefault();
    //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
    //dispatch(getPicture(state))
    const picdata = new FormData (picture.current)
    const results = await Api.addPicture( username, picdata )
    
  };

  
  // const setPic = async (event) => {
  //   event.preventDefault();
  //   //setState((prevState) => ({ ...prevState, formData: new FormData (picture)}));
  //   dispatch(setPicture(state))
   
  // };


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
      
      {/* {console.log(state.formData)} */}

        <label htmlFor="username">Username</label>
        
    </React.Fragment>
  );
  }