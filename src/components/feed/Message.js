import React, { useState } from "react";
import { createTimestamp } from "../../components/functions/createTimestamp";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLikes,
  deleteMessage,
  profileLikes,
} from "../../redux/actions/messages";
import { likes } from "../../redux/actions/messages";
import { profileDeleteMessage, profileDeleteLikes } from '../../redux/actions/messages'
export const Message = props => {

  const dispatch = useDispatch();

  const messagListParams = useSelector(state => state.infiniteScroll);

  const { msgListParams, username } = useSelector((state) =>
  ({
    username: state.getUser.username,
    msgListParams: state.infiniteScroll,
  }))

  const handleDelete = () => {
    if (props.profile) {
      dispatch(profileDeleteMessage(props.msgId, messagListParams, username));
    }
    else {
      dispatch(deleteMessage(props.msgId, messagListParams));
    }
  };

  let timestamp = createTimestamp(props.createdAt);

  const [disClick, setDisClick] = useState(13);

  const handleLike = messageId => {
    dispatch(likes(messageId, msgListParams));
    if (!props.profile) {
      dispatch(likes(messageId, msgListParams));
    } else {
      dispatch(profileLikes(messageId, msgListParams, username));
    }
  };

  let yourLike
  const handleUnlike = () => {
    for (let like of props.likes) {
      if (like.username === username) {
        yourLike = like.id
      }
    }
    if (!props.profile) {
      dispatch(deleteLikes(yourLike, msgListParams))
    } else {
      dispatch(profileDeleteLikes(yourLike, msgListParams, username));
    }
  };

  return (<>

    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img
            src={props.userPhoto ? `https://kwitter-api.herokuapp.com/users/${props.username}/picture` : '/kwitter-user.png'}
            width="200"
            height="200" />
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
              <button class="ui blue button" onClick={() => handleLike(props.msgId)}> { }
                <i class="heart icon"></i> Like(s)
            </button>
              <a class="ui basic blue left pointing label">
                {props.likes.length}
              </a>
            </div>
            <div class="ui labeled button" tabIndex="0">
              <button class="ui blue button" onClick={() => handleUnlike()}>
                <i class="thumbs down icon"></i> Delete Like(s)
            </button>
            </div>
            <div class="ui labeled button" tabIndex="0">
              <button class="ui red button" onClick={() => setDisClick(disClick + 1)}>
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
  </>)
}
