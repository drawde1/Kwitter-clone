import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPicture } from "../../redux/actions/photos";
import { Loader } from "../loader";
import { useRef } from "react";
import Api from "../../utils/api"
import { user } from "../../redux/actions";

//import "./LoginForm.css";


export const Picture = () => {
  //const dispatch = useDispatch();
  const picture = useRef(null);
  const username = useSelector(state => state.auth.username);
  console.log(username)

  //const [state, setState] = useState({
   // username: "user",
   // formData: picture,
  //});


  //const handleLogin = (event) => {
  //  event.preventDefault();
  //  dispatch(actions.login(state));
  //};

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

      
      <form ref={picture} onSubmit = {addPic}>
       <input type="file" name="picture">
        </input>
        <button type="submit">upload picture</button> 
      </form>
      {/* <button  onClick={addPicChange}>Change Picture</button> */}
      {console.log("State.action")}
      {/* {console.log(state.formData)} */}

        <label htmlFor="username">Username</label>
        
    </React.Fragment>
  );
  }