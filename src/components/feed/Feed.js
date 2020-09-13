import React, { useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
import {createTimestamp} from '../functions/createTimestamp'
//import { IncrementClick, RemoveClick, ToggleSelection } from '../likes'
import {Message} from './Message'
import {Loader} from '../loader/Loader'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import './Message.css'
import {infiniteScroll} from '../../redux/actions/infiniteScroll'


export const Feed = (props) => {
 
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getMessageList({limit:10, offset:0}))},[])
    
    useEffect(()=>{dispatch(restInfiniteScroll(0))},[])
    const {messageList,loadingList,msgListParams,} = useSelector((state)=>({
        msgListParams: state.infiniteScroll,
        messageList: state.getMessageList.messages,
        loadingList: state.getMessageList.loading,
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
  


  const handleScroll = (event) =>{
    const{scrollHeight,clientHeight,scrollTop} = event.currentTarget
    if(clientHeight + scrollTop >= scrollHeight-30) {
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


//   const handleChange = (event) => {
//    console.log(state)
//     let inputValue = event.target.value;
//     setState((prevState) => ({ ...prevState, text: inputValue }));
//   };
//   const postMessage = (event) => {
//     event.preventDefault();
//     console.log(state)
//      dispatch(addMessage(state));
//      dispatch(getMessageList(msgListParams));
     
     
//   };
//   const handleScroll = (event) =>
//   {
    
//     const {scrollHeight,clientHeight,scrollTop} = event.currentTarget
//     // console.log('scrollHeight',scrollHeight)
//     // console.log('clientHeight',clientHeight)
//     // console.log('scrollTop',scrollTop)
//     if(clientHeight + scrollTop >= scrollHeight)
//     {
//       console.log('end')
//       dispatch(infiniteScroll(5))
      
//       dispatch(getMessageList(msgListParams))
//     }
//   }
 
     
    
//     return (
//         <React.Fragment>
//         <form id="login-form" onSubmit={postMessage}>
//             <label htmlFor="msg">say something</label>
//             <input
//             type="text"
//             name="msg"
//             value={state.msg}
//             autoFocus
//             required
//             onChange={handleChange}
//             />
            
//             <button type="submit" >
//             send
//             </button>
            
            
//         </form>
//         {/* {loadingMessage && <Loader />} */}
//         <br/>
//         <br/>
        
//         {/* {loadingList && <Loader />} */}
//         <br/>
//         <br/>
//         <div className = 'scrollBox' onScroll = {handleScroll} >
//         {loadingList?<Loader/>:  messageList.map((message) => (
//                 <Message text={message.text} 
//                 username={message.username}
//                 msgId ={message.id}
//                 key = {message.id} 
//                 likes = {message.likes}
//                 createdAt ={message.createdAt}
//                 />
//                 ))}
//                 </div>
//         </React.Fragment>
    
//     );
    
    
 };
