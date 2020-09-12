import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {createTimestamp} from '../functions/createTimestamp'

export const User = (props) =>
{
    
    const createdTimestamp = createTimestamp(props.createdAt)
    const updatedTimestamp = createTimestamp(props.updatedAt)
    
    return(
        <>
        <div className = 'username'>
            <p>{props.username}</p>
        </div>
        <div className = 'displayname'>
            <p>{props.displayName}</p>
        </div>
        <div  className = 'about'>
            <p>{props.about}</p>
        </div>
        <div className = 'photo'>
            <img
            src={!props.pictureLocation?'/kwitter-user.png':"https://kwitter-api.herokuapp.com" + props.pictureLocation}
            width='50'
            height='50'
            />
       </div>
      
        </>
    )
}