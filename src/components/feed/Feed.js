import React, { useState} from "react";
import {  useDispatch,useSelector} from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import { handleLikesIncrement, handleLikesDecrement } from '../likes/Likes'


import {Message} from './Message'
import {createTimestamp} from '../../functions/createTimestamp'

export const Feed = (props) => {
 
    // const { loading, error } = useSelector((state) => ({
    //     loading: state.auth.loading,
    //     error: state.auth.error,
    //   }));

    // id: 0,
    // text:'',
    // username: '',
    // createdAT:'',
    // likes:[],
    // loading: false,
    // error: ''
    const {id,text,likes,messageList,createdAt} = useSelector((state)=>({
        id: state.addMsg.id,
        text: state.addMsg.text,
        likes: state.addMsg.likes,
        messageList: state.getMessageList.messages,
        createdAt: state.addMsg.createdAt
        
    })) 
    // 2020-09-03T14:27:16.454Z
  const msgListParams =
  {
    limit: 10,
    offset: 0
  }
  const dispatch = useDispatch();
    
  const initialState = {
    text: "",
    clicks: 0
  }
  
  const [state, setState] = useState(initialState);
  
 
  //TODO infinite scroll use scroll event useinmg window.(scroll arguments)
  //scroll argumentrs include 
//   scrollY = y off set
  //innerHeight = visable window
  //scrollHeight = the length of the entire page

  const handleChange = (event) => {
   
    let inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, text: inputValue }));
  };
  const postMessage = (event) => {
    event.preventDefault();
     dispatch(addMessage(state));
     dispatch(getMessageList(msgListParams));
     //console.log(messageList[0].createdAt)
  };
 
  return (
    <React.Fragment>
      <form id="login-form" onSubmit={postMessage}>
        <label htmlFor="msg">say something</label>
        <input
          type="text"
          name="msg"
          value={state.msg}
          autoFocus
          required
          onChange={handleChange}
        />
        
        <button type="submit" >
          send
        </button>
        <div>
        <p> {id}</p>
        <p>{text}</p>
        </div>  
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      
    </React.Fragment>
  );
};
