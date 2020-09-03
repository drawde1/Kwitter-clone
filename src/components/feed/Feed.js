import React, { useState} from "react";
import {  useDispatch,useSelector} from "react-redux";
import { addMessage, getMessageList } from "../../redux/actions/messages";



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
    const {username,text,likes,messageList} = useSelector((state)=>({
        username: state.addMsg.username,
        text: state.addMsg.text,
        likes: state.addMsg.likes,
        // messageList: state.getMessageList
    })) 
   
//   const msgListParams =
//   {
//     limit: 10,
//     offset: 0
//   }
  const dispatch = useDispatch();
//     dispatch(getMessageList(msgListParams))
  const initialState = {
    text: "",
  }
  
  const [state, setState] = useState(initialState);

  

  const handleChange = (event) => {
   
    let inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, text: inputValue }));
  };
  const postMessage = (event) => {
    event.preventDefault();
     dispatch(addMessage(state));
     
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
        <p> {username}</p>
        <p>{text}</p>
        <button onClick={() => (likes + 1)}>
          Like
        </button>{likes.length}{" "} like(s)
       
      </form>
      
      
    </React.Fragment>
  );
};
