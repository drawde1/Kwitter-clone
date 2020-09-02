import React from "react";
import { MenuContainer } from "../components";
import api from "../utils/api";
import { useDispatch } from "react-redux"
import  getPicture  from "../redux/actions/userpicture"

const users = "user/username"
const dispatch = useDispatch()
const getPic = () => dispatch(actions.getPicture())
export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <h3>my name is  </h3>
    {getPic}
    
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
