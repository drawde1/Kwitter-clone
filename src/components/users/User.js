import React from "react";
import './user.css'

export const User = (props) => {

    return (
        <>

            <div class="ui cards">
                <div class="card">
                    <div class="content">
                        <div className='photo'>
                            <img
                                src={!props.pictureLocation ? '/kwitter-clone/build/static/kwitter-user.png' : "https://kwitter-api.herokuapp.com" + props.pictureLocation}
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