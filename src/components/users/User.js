import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import {createTimestamp} from '../functions/createTimestamp'
import './user.css'

export const User = (props) =>
{
    
    const createdTimestamp = createTimestamp(props.createdAt)
    const updatedTimestamp = createTimestamp(props.updatedAt)
    
    return(
        <>
        
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div className = 'photo'>
                        <img
                        src={!props.pictureLocation?'/kwitter-user.png':"https://kwitter-api.herokuapp.com" + props.pictureLocation}
                        width='50'
                        height='50'
                        />
                    </div>
                    <div class="header">{props.username}</div>
                        <div class="meta">{props.displayName}</div>
                            <div class="description">
                                    {props.about}
                            </div>
                        </div>
                    </div>
        </div>
            </>
    )
}