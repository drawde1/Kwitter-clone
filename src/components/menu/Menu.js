import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const Menu = () => {
  const {isAuthenticated,username} = useSelector(state => ({isAuthenticated:!!state.auth.isAuthenticated, username:state.auth.username}));
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  const loginuser = useSelector((state) => state.auth.isAuthenticated) 

  return (
    <div id="menu">
      
      <h1>Kwitter</h1>
      <div id='menu-links'>
        {isAuthenticated ? (
          <>
<<<<<<< HEAD
            <Link to="/profile/:username">View Profile</Link>
=======
            <Link to={"/profile/"+username}>Profile</Link>
>>>>>>> 08ff4f1b18af2c32b8af5636aaa38962645177b9
            <Link to="/users">Users</Link>
            <Link to="/feed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
            {/* <Link to="/profile">
              View Profile
            </Link> */}
          </>
        ) : null}
      </div>
    </div>
  );
};