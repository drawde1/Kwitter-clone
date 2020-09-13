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
  const [isToggled, setToggle] = useState({isToggled:false});
  const [isToggled2, setToggle2] = useState({isToggled2:false});
  const [registerState, setRegisterState] = useState({INITIALSTATE})

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
    if(error)
    {
      setToggle((prevState)=> ({...prevState,isToggled:true}))
    }
  };

  const handleRegister = (event) => { 
    event.preventDefault();
    
    dispatch(user(registerState));
    setToggle2((prevState)=> ({...prevState,isToggled2:true}))
    console.log(registerState)
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
  // 
  return (
    <React.Fragment>
    <div id="login">
    <div id="spaceleft"></div>
      <div id="logform">
      <div id="logformborder">
      
      <form id="login-form" onSubmit={handleLogin}>
      <b><p id="log">Current Users</p></b>
      <h2 className={isToggled.isToggled?"showL":"hiddenL"}>user not found . . .</h2>
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
        <div id ="submit2">
        <button type="submit" disabled={loading}>
          Login
        </button>
        </div>
        
        </div>
      </form>
      </div>
      <p></p>
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
        <div id ="submit1">
        <button type="submit" disabled={loading}>
          Register
        </button>
        </div>
        </form>
        
        </div>
        <b><p className={isToggled2.isToggled2?"showR":"hiddenR"}>Register complete, you can now login.</p></b>
        </div> 
        
        <div id="spaceright"></div>
        </div>
          
      {loading && <Loader />}
     
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
 