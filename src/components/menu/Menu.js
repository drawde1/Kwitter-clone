import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const Menu = () => {
  const { isAuthenticated, username } = useSelector(state => ({ isAuthenticated: !!state.auth.isAuthenticated, username: state.auth.username }));
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());

  return (
    <div id="menu">
      <div id="kwitterhead">
        <p>Kwitter</p>
      </div>
      <div class="ui horizontal list">
        <div class="item">
          <img class="ui mini circular image" src={'/q.png'} />
          <div class="content">
            <div class="ui sub header">Shanquetta Pelzer</div>
            Product Owner
          </div>
        </div>
        <div class="item">
          <img class="ui mini circular image" src={'/kwitter-user.png'} />
          <div class="content">
            <div class="ui sub header">Edward Perkins</div>
            Scrum Master
          </div>
        </div>
        <div class="item">
          <img src={'/elijah.jpg'} class="ui mini circular image" />
          <div class="content">
            <div class="ui sub header">Elijah Camara</div>
            QA
          </div>
        </div>
        <div class="item">
          <img src={'/tune.jpg'} class="ui mini circular image" />
          <div class="content">
            <div class="ui sub header">Tuan Wright</div>
            Developer
          </div>
        </div>
        <div class="item">
          <img src={"/charles.jpg"} class="ui mini circular image" />
          <div class="content">
            <div class="ui sub header">Charles Campbell</div>
            Developer
          </div>
        </div>
      </div>

      <div id='menu-links'>
        {isAuthenticated ? (
          <>
            <Link to={"/profile/" + username}>Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/feed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>

          </>
        ) : null}
      </div>
    </div>
  );
};