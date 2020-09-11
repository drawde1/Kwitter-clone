import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Profile.css";
import {user} from "../../redux/actions/user";


export const Profile = () => {
  const {username, displayname} = useSelector((state) => ({
    username: state.adduser.username,
    name: state.adduser.displayname
  }));

  const dispatch = useDispatch();

  const INITIALSTATE = {
    username: "",
    displayname: "",
    about: ""
  }

  const [state, setState] = useState({INITIALSTATE});

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(actions.user(state));
  }

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="updat-form" onSubmit={handleUpdate}>
        <label htmlFor="username">Current Username: {username}</label>
        <input
        type="text"
        name="username"
        value={state.username}
        autoFocus
        required
        onChange={handleChange}
        />
        <label htmlfor="displayname">Current Name: {this.name} </label>
        <input
        type="text"
        name="displayname"
        value={state.displayname}
        autoFocus
        required
        onChange={handleChange}
        />
        <label htmlfor="displayname">bio</label>
        <input
        type="text"
        name="about"
        value={state.about}
        autoFocus
        required
        onChange={handleChange}
        />
        <button type="submit">
            Update Profile
        </button>
      </form>
    </React.Fragment>
  )
}