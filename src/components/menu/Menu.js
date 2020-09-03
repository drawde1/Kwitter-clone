import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const Menu = () => {
  const isAuthenticated = useSelector(state => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  const loginuser = useSelector((state) => state.auth.isAuthenticated) 
  // const kwit = () => dispatch(actions.kwit());
  return (
    <div id='menu'>
      <h1>Kwitter</h1>
      <div id='menu-links'>
        {isAuthenticated ? (
          <>
            <Link to="/feed">Message Feed</Link>
            <Link to="/profiles/:username">Profile</Link>
            <Link to='/feed'>Message Feed</Link>
            <Link to="/users">Users</Link>
            <Link to="/" onClick={logout}>
            <Link to='/feed'>Message Feed</Link>
            <Link to='/' onClick={logout}>
              Logout
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
