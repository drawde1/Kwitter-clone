import React, { useState, useRef } from "react";
import { createTimestamp } from "../../components/functions/createTimestamp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  deleteLikes,
  deleteMessage,
} from "../../redux/actions/messages";
import actions from "redux-form/lib/actions";
import { likes } from "../../redux/actions/messages";
import {userPicture} from '../../components/profile/profile'

export const Message = props => {
  //TODO: handle delete message
  //TODO: handle likes add & delete
  const dispatch = useDispatch();
  const { username } = useSelector(state => ({
    username: state.auth.username,
  }));

  // id: 0,
  // text:'',
  // username: '',
  // createdAT:'',
  // likes:[],

  const messagListParams = useSelector(state => state.infiniteScroll);

    const{name,bio,userPicture,userInfo,messageList } = useSelector((state)=>
    ({
      username: state.auth.username,
      userPicture: state.getUser.pictureLocation,
      userInfo:  state.getUser,
      messageList: state.getMessageList.messages,
      name: state.getUser.displayName,
      bio: state.getUser.about,
      count: state.getMessageList.count,
      messageList: state.getMessageListByUser.messages,
      msgListParams: state.infiniteScroll,
    }))

    const msgListParams =
    {
        limit: 50,
        offset: 0
    }
  const handleDelete = () => {
    console.log(props.messageId);
    dispatch(deleteMessage(props.msgId, messagListParams));
  };

  let timestamp = createTimestamp(props.createdAt);
  // // useEffect(()=>{})
  // componentDidMount(()=>{timestamp = })

  const [disClick, setDisClick] = useState(0);
  const [deselect, setDeselect] = useState(false);

  const handleLike = messageId => {
    dispatch(likes(messageId, messagListParams));

    //dispatch(getMessageList(msgListParams));
  };

  const handleUnlike = id => {
    dispatch(deleteLikes(id, messagListParams));
  };

  
//   const handleUnlike = (id) => {
//     dispatch(deleteLikes(id))
//   }

//   const loggedInUser = () => {
//     for (let like of message.like) {
//         console.log(like)
//         if (like.username === LoggedInUser)
//         console.log(like.id)

//     }
//   }


 

 return (  <>

<div class="ui feed">
  <div class="event">
    <div class="label">
    <img 
          src = {"https://kwitter-api.herokuapp.com"+userPicture}
          width="200" 
          height="200"/>
    </div>
    <div class="content">
      <div class="summary">
        <a class="user">
        {props.username}
        </a> 
        </div>
        <div class="summary">
            <a class="user">
            </a> {props.text}
            <div class="date">
            {timestamp.time}<span> date:{timestamp.date}</span>
        </div>
      </div>
      <div class="meta">
      <div class="ui labeled button" tabIndex="0"> 
            <button class="ui blue button" onClick={() => handleLike(props.msgId)}> {}
                <i class="heart icon"></i> Like(s)
            </button>
            <a class="ui basic blue left pointing label">
               {props.likes.length} 
            </a>
        </div>
        <div class="ui labeled button" tabIndex="0"> 
        <button class="ui blue button" onClick={() => handleUnlike(props.likeId)}>
                 <i class="thumbs down icon"></i> Delete Like(s)
            </button>
        </div>
        <div class="ui labeled button" tabIndex="0">
            <button class="ui red button" onClick={() => setDisClick(disClick + 1 )}>
                <i class="frown icon"></i> Dislikes
            </button>
            <a class="ui basic left pointing red label">
                {disClick}
            </a>
        </div>
            {username === props.username ? (
        <div class='ui labeled button' tabIndex='0'>
          <button
            class='ui purple button'
            onClick={() => handleDelete(props.msgId)}
          >
            <i class='cross mark icon'></i> Delete Message
          </button>
        </div>
      ) : null}
        </div>
      </div>
    </div>
  </div>
  
      


        {/* <p>user:{props.username}</p>
        <p>text:{props.text}</p>
        <p>time: {timestamp.time}<span> date:{timestamp.date}</span></p>
        <div class="ui labeled button" tabIndex="0"> 
            <button class="ui blue button" onClick={() => handleLike(props.msgId)}> {}
                <i class="heart icon"></i> Like(s)
            </button>
            <a class="ui basic blue left pointing label">
               {props.likes.length} 
            </a>
        </div>
        <div class="ui labeled button" tabIndex="0"> 
        <button class="ui blue button" onClick={() => handleUnlike(props.likeId)}>
                 <i class="thumbs down icon"></i> Delete Like(s)
            </button>
        </div>
        <div class="ui labeled button" tabIndex="0">
            <button class="ui red button" onClick={() => setDisClick(disClick + 1 )}>
                <i class="frown icon"></i> Dislikes
            </button>
            <a class="ui basic left pointing red label">
                {disClick}
            </a>
        </div>
         */}

    </>)
}
