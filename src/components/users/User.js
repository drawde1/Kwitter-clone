import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {createTimestamp} from '../functions/createTimestamp'
export const User = (props) =>
{
    // pictureLocation={user.pictureLocation} 
    //       username={user.username}
    //       displayName ={user.displayName}
    //       key = {user.username} 
    //       updatedAt = {user.updatedAt}
    //       createdAt ={user.createdAt}
    //       about = {user.about}
    const createdTimestamp = createTimestamp(props.createdAt)
    const updatedTimestamp = createTimestamp(props.updatedAt)
    
    return(
        <>
        <p>{props.username}</p>
        <p>{props.displayName}</p>
        <p>{props.about}</p>
        <img
        src={"https://kwitter-api.herokuapp.com" + props.pictureLocation}
        width='50'
        height='50'
      />
      
        </>
    )
}