import React from "react";
import { createTimestamp } from "../../functions/createTimestamp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LIKE, deleteMessage } from "../../redux/actions/messages";
import { MessageItem } from "semantic-ui-react";

export const Message = props => {
  const dispatch = useDispatch();

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
