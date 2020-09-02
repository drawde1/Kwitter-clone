import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPicture } from "../../redux/actions/userpicture";
import { Loader } from "../loader";
//import "./LoginForm.css";

//export const LoginForm = ({ login }) => {
//  const { loading, error } = useSelector((state) => ({
//    loading: state.auth.loading,
//    error: state.auth.error,
//  }));
export const Picture = ({ username }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "user",
    picture: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A600002293-SW-KO?$AFHS-PDP-Zoomed$",
  });

  //const handleLogin = (event) => {
  //  event.preventDefault();
  //  dispatch(actions.login(state));
  //};

  const addPicChange = (event) => {
    //event.preventDefault();
    //const userName = event.target.username;
    dispatch(getPicture(state))
    //const inputValue = event.target.value;
    //setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
        <h1>Profile Page</h1>
      <button onClick={addPicChange}>add picture</button>
        <label htmlFor="username">Username</label>
        
    </React.Fragment>
  );
  }