<<<<<<< HEAD
import React from "react";
import { createTimestamp } from "../../functions/createTimestamp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LIKE, deleteMessage } from "../../redux/actions/messages";
import { MessageItem } from "semantic-ui-react";
=======
import React, { useState, useRef }  from 'react'
import { createTimestamp } from '../../components/functions/createTimestamp'
import { useEffect,} from 'react'
import {  useDispatch,useSelector} from "react-redux";
import {addLike, deleteLike, deleteMessage} from '../../redux/actions/messages'
import actions from 'redux-form/lib/actions';
import {likes} from '../../redux/actions/messages'


export const Message = (props) =>
{
//TODO: handle delete message
//TODO: handle likes add & delete
const dispatch =useDispatch()
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913

export const Message = props => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  // id: 0,
  // text:'',
  // username: '',
  // createdAT:'',
  // likes:[],

  // 2020-09-03T14:27:16.454Z

  let timestamp = createTimestamp(props.createdAt);
  // // useEffect(()=>{})
  // componentDidMount(()=>{timestamp = })

  const delete_Messages = props.Message.filter(
    delete_message => delete_message
  );

  return (
    <>
      <p>user:{props.username}</p>
      <p>text:{props.text}</p>
      <p>likes:{props.likes.length}</p>
      <p>
        time: {timestamp.time}
        <span> date:{timestamp.date}</span>
      </p>
      <button>like</button>
      <button>x</button>
      <button onClick={deleteMessage}>Delete Message</button>
    </>
  );
};
=======
    const msgListParams =
    {
        limit: 10,
        offset: 0
    }

    
    const handleDelete = () =>
    {
        console.log(props.messageId)
        dispatch(deleteMessage(props.msgId))
    }

 let timestamp = createTimestamp(props.createdAt)
// // useEffect(()=>{})
// componentDidMount(()=>{timestamp = })

 
  const [disClick, setDisClick] = useState(0)
  const [deselect, setDeselect] = useState(false)

  const handleLike = (messageId) => {
      dispatch(likes(messageId))

      //dispatch(getMessageList(msgListParams));
  }

//   const handleUnlike = messageId => () => {
//       console.log(messageId);
//       this.props.dispatch(deleteLike(messageId))
//   }
  //const [likeMessage] = likes(this.props.messageId)

 return (  <>
        <p>user:{props.username}</p>
        <p>text:{props.text}</p>
        <p>time: {timestamp.time}<span> date:{timestamp.date}</span></p>
        <div class="ui labeled button" tabIndex="0">
            <button class="ui blue button" onClick={handleLike(props.msgId)}>
                <i class="heart icon"></i> Like(s)
            </button>
            <a class="ui basic blue left pointing label">
               {likes.length} 
            </a>
        </div>
        <div class="ui labeled button" tabIndex="0">
            <button class="ui red button" onClick={() => setDisClick(disClick + 1 )}>
                <i class="frown icon"></i> Dislikes
            </button>
            <a class="ui basic left pointing red label">
                {disClick}
            </a>
        </div>
        

    </>)
}
>>>>>>> 543f957701b24d42ae9bb4a0594d32620bbef913
