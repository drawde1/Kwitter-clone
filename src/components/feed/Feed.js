import React, { useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import {Message} from './Message'
import {Loader} from '../loader/Loader'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import './Message.css'
import {infiniteScroll} from '../../redux/actions/infiniteScroll'


export const Feed = () => {

    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getMessageList({limit:10, offset:0}))},[])

    useEffect(()=>{dispatch(restInfiniteScroll(0))},[])
    const {messageList,loadingList,msgListParams,count,} = useSelector((state)=>({
        msgListParams: state.infiniteScroll,
        messageList: state.getMessageList.messages,
        loadingList: state.getMessageList.loading,
        count: state.getMessageList.count
    })) 
    
  const initialState = {
    text: "",
   
  }

  const [state, setState] = useState(initialState);

  useEffect(()=>{
    dispatch(getMessageList(msgListParams))
  },[])

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, text: inputValue }));
  };

  const postMessage = (event) => {
    event.preventDefault();
    dispatch(addMessage(state,msgListParams));
    setState((prevState) => ({ ...prevState, text: "" }))
  };
  

const handleScroll = (event) =>
   {
     const{scrollHeight,clientHeight,scrollTop} = event.currentTarget
     if(clientHeight + scrollTop >= scrollHeight-30 && msgListParams.offset < count)
     {
      dispatch(infiniteScroll(10))
      dispatch(getMessageList(msgListParams)) 
     }
   } 
return (
  <React.Fragment>
  <form id="feed" onSubmit={postMessage}>
      <label htmlFor="msg"></label>
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
  </form>
  <br/>
  <br/>
  <br/>
  <br/>
  {loadingList && <Loader/>}
  <div className= 'scrollBox' onScroll ={handleScroll}>
  {messageList.map((message) => (
          <Message text={message.text} 
          username={message.username}
          msgId ={message.id}
          key = {message.id} 
          likes = {message.likes}
          createdAt ={message.createdAt}
          userPhoto = {message.pictureLocation}
         
          />
  ))}
  </div>
  </React.Fragment>
);
};
