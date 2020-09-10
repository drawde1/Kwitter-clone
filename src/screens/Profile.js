import React from "react";
import { ProfileContainer, MenuContainer } from "../components";
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
    <h3>Here is my picture  </h3>
    {/* <Picture /> */}
    <ProfileContainer />
  </>
);


export const MessageScreen = () => (
  <>
  <h2>Hello, I'm your messages</h2>
  </>
)

export const UsersScreen = () => (
  <>
  <h2>Hello, Im all the users</h2>
  </>
)
