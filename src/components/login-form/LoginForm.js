import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";
import { adduser} from '../../redux/actions/defaultuser'
export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const defaultUser =
  {
    username: 'user',
    display: 'dis',
    password: 'pass',
 
  }
  const addDefault = (defaultUser) => {
    dispatch(adduser(defaultUser))
}
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}>
          Login
        </button>
        
      </form>
      <button onClick = {addDefault}>
          default user
        </button>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
