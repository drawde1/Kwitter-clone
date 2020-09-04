import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./Profile.css";
import {user} from "../../redux/actions/user";
import { getPicture } from "../../redux/actions/photos";
import { useRef } from "react";
import Api from "../../utils/api"
// import { user } from "../../redux/actions";

export const Profile = () => {
    const {username, name} = useSelector((state) => ({
        username: state.user.username,
        name: state.user.displayname
    }));

    const dispatch = useDispatch();

    const INITIALSTATE = {
        password: "",
        about: "",
        displayname: "",
    }

    const [state, setState] = useState({INITIALSTATE});

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(user(state));
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    };

    return (
        <React.Fragment>
            <form id="update-form" onSubmit={handleUpdate}>
                <label htmlFor="displayname">Current Name: {name} </label>
                <input
                    type="text"
                    name="displayname"
                    value={state.displayname}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="username">Current Password: {username}</label>
                <input
                    type="text"
                    name="username"
                    value={state.password}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="displayname">bio</label>
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

export const Picture = () => {
  //const dispatch = useDispatch();
  const picture = useRef(null);
  const username = useSelector(state => state.auth.username);

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
