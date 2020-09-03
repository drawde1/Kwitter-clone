import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const Menu = () => {
  const isAuthenticated = useSelector(state => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  // const kwit = () => dispatch(actions.kwit());
  return (
    <div id='menu'>
      <h1>Kwitter</h1>
      <div id='menu-links'>
        {isAuthenticated ? (
          <>
<<<<<<< HEAD
            <Link to='/messagefeed'>Message Feed</Link>
            <Link to='/' onClick={logout}>
              <Link to='/' onClick={logout}></Link>*/ Logout
=======
            <Link to="/feed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
>>>>>>> 4e6d2655debf5a91aefef16e9c57017d1cf53a6a
            </Link>
          </>
        ) : //  <Link to="/" onClick={kwit}>
        //</Link><Link to="/" onClick={kwit}></Link>* /
        //Kwit
        null}
      </div>
    </div>
  );
};
