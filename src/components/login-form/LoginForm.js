import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";
import {user} from '../../redux/actions/user'

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const INITIALSTATE = {
    username: '',
    displayName: '',
    password: '',
  }

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [registerState, setRegisterState] = useState({INITIALSTATE})

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
    if(error)
    {
      alert("user not found please register")
    }
  };

  const handleRegister = (event) => { 
    event.preventDefault();
    dispatch(user(registerState));
  };

  
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));

  };
  

  const handleRegChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setRegisterState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
    <div id="login">
    <div id="spaceleft"></div>
      <div id="logform">
      <div id="logformborder">
      <form id="login-form" onSubmit={handleLogin}>
      <b><p id="log">Current Users</p></b>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        </div>
      </form>
      </div>
    </div>
    <div id="divspace"></div>
    <div id="regform">
      <div id="regformborder">
      <form id="register-form" onSubmit={handleRegister}>
      <b><p id="create">Create an Account</p></b>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={registerState.username}
          autoFocus
          required
          onChange={handleRegChange}
        />
        <label htmlFor="displayName">Name</label>
        <input
          type="text"
          name="displayName"
          value={registerState.displayName}
          autoFocus
          required
          onChange={handleRegChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={registerState.password}
          required
          onChange={handleRegChange}
        />
        <div>
        <button type="submit" disabled={loading}>
          Register
        </button>
        </div>
        </form>
        </div>
        </div> 
        </div>
          {/* <form id="login-form" onSubmit={handleLogin}>
          <div>
            <h2><label htmlFor="username">Username</label></h2>
            <input
              type="text"
              name="username"
              value={state.username}
              autoFocus
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <h2><label htmlFor="password">Password</label></h2>
            <input
              type="password"
              name="password"
              value={state.password}
              required
              onChange={handleChange}
            />
          </div>
          <div id="logsub1">
            <button type="submit" disabled={loading}>
              Login
            </button>
          </div>
          </form>
      </div>
    
          <div id="divspace">
          </div>

      <div id="regform">
        <div id="registertitle">
          Register
        </div>
          <form id="register-form" onSubmit={handleRegister}>
          <div>
            <h2><label htmlFor="username">Username</label></h2>
            <input
              type="text"
              name="username"
              value={registerState.username}
              autoFocus
              required
              onChange={handleRegChange}
            />
          </div>
          <div>
            <h2><label htmlFor="displayName">Display Name</label></h2>
            <input
              type="text"
              name="displayName"
              value={registerState.displayName}
              autoFocus
              required
              onChange={handleRegChange}
            />
          </div>
          <div>
            <h2><label htmlFor="password">Password</label></h2>
            <input
              type="password"
              name="password"
              value={registerState.password}
              required
              onChange={handleRegChange}
            />
          </div>
          <div id="logsub2">
            <button type="submit" disabled={loading}>
              Register
            </button>
          </div>
          </form>
      </div> */}
      {loading && <Loader />}
      {/* <div class="ui success manager">
          <i class="close icon"></i>
          <div class="header">
            Your registration was successful.
          </div>
          <p>You may now log-in with the username you have chosen</p>
        </div> */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
 