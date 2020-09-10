import React from "react";
import { MenuContainer } from "../components";
import api from "../utils/api";
import { useDispatch } from "react-redux"
import { Picture } from "../components/profile/profile"

const users = "user/username"
//const dispatch = useDispatch()
//const getPic = () => dispatch(actions.getPicture(state))
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <div id="profile">
    <h2>Profile</h2>
    <Picture />
    </div>
  </>
);


export const MessageScreen = () => (
  <>
  <h2>Hello, Im your messages</h2>
  </>
)

export const UsersScreen = () => (
  <>
  <h2>Hello, Im all the users</h2>
  </>
)
