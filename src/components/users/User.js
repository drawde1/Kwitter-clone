import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {createTimestamp} from '../functions/createTimestamp'

export const User = (props) =>
{
    
    const createdTimestamp = createTimestamp(props.createdAt)
    const updatedTimestamp = createTimestamp(props.updatedAt)
    
    return(
        <>
        <p>{props.username}</p>
        <p>{props.displayName}</p>
        <p>{props.about}</p>
        <img
        src={!props.pictureLocation?'/kwitter-user.png':"https://kwitter-api.herokuapp.com" + props.pictureLocation}
        width='50'
        height='50'
      />
      
        </>
    )
}