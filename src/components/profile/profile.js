import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Profile.css";
import {user} from "../../redux/actions/user";


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
            <form id="updat-form" onSubmit={handleUpdate}>
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