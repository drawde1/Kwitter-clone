import React, { useState, useEffect} from "react";
import {  useDispatch,useSelector} from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";
//import { IncrementClick, RemoveClick, ToggleSelection } from '../likes'


import {Message} from './Message'
import {Loader} from '../loader/Loader'
import {restInfiniteScroll} from '../../redux/actions/infiniteScroll'
import './scrollBox.css'
import {infiniteScroll} from '../../redux/actions/infiniteScroll'
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
    useEffect(()=>{dispatch(restInfiniteScroll(10))},[])
    const {messageList,loadingList,msgListParams} = useSelector((state)=>({
        msgListParams: state.infiniteScroll,
        messageList: state.getMessageList.messages,
        loadingList: state.getMessageList.laoding
    })) 
    
    
    
  // const msgListParams =
  // {
  //   limit: 10,
  //   offset: 0
  // }
  const initialState = {
    text: "",
    isActive: false
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
 //console.log(state)
  let inputValue = event.target.value;
  setState((prevState) => ({ ...prevState, text: inputValue }));
};
const postMessage = (event) => {
  event.preventDefault();
  //console.log(state)
   dispatch(addMessage(state,msgListParams));
   
};

const handleScroll = (event) =>
   {
     
     const {scrollHeight,clientHeight,scrollTop} = event.currentTarget
     // console.log('scrollHeight',scrollHeight)
     // console.log('clientHeight',clientHeight)
     // console.log('scrollTop',scrollTop)
     if(clientHeight + scrollTop >= scrollHeight-30)
     {
       console.log('end')
       dispatch(infiniteScroll(5))
       
       dispatch(getMessageList(msgListParams))
     }
   }
return (
  <React.Fragment>
  <form id="login-form" onSubmit={postMessage}>
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
      <div>
      
      </div>
      
  </form>
  <br/>
  <br/>
  <br/>
  <br/>
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
