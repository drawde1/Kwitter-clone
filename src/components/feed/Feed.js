import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import {Message} from './Message'
import {Loader} from '../loader/Loader'
import {createTimestamp} from '../functions/createTimestamp'

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
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getMessageList(msgListParams))},[])
    const {messageList,loadingMessage,loadingList} = useSelector((state)=>({
        
        messageList: state.getMessageList.messages,
        
        loadingMessage: state.addMsg.loading,
        loadingList: state.getMessageList.laoding
    })) 
    
    
    
  const msgListParams =
  {
    limit: 10,
    offset: 0
  }
  
    
  const initialState = {
    text: "",
  }
  
  const [state, setState] = useState(initialState);

  useEffect(()=>{
      dispatch(getMessageList(msgListParams))

  },[])
//  let feedMessages = []
//  feedMessages = messageList
  //TODO infinite scroll use scroll event useinmg window.(scroll arguments)
  //scroll argumentrs include 
//   scrollY = y off set
  //innerHeight = visable window
  //scrollHeight = the length of the entire page

  const handleChange = (event) => {
   console.log(state)
    let inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, text: inputValue }));
  };
  const postMessage = (event) => {
    event.preventDefault();
    console.log(state)
     dispatch(addMessage(state));
     dispatch(getMessageList(msgListParams));
     
     
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
            
            
        </form>
        {/* {loadingMessage && <Loader />} */}
        <br/>
        <br/>
        
        {/* {loadingList && <Loader />} */}
        <br/>
        <br/>
        {loadingList?<Loader/>:  messageList.map((message) => (
                <Message text={message.text} 
                username={message.username}
                msgId ={message.id}
                key = {message.id} 
                likes = {message.likes}
                createdAt ={message.createdAt}
                />
                ))}
        </React.Fragment>
    
    );
    
    
};
