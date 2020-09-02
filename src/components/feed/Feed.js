import React, { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { addMessage } from "../../redux/actions/messages";



export const Feed = (props) => {
 
  const dispatch = useDispatch();

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
    const msg = dispatch(addMessage(state));
    
    
    console.log(msg)
    
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
        <p> {}</p>
      </form>
      
      
    </React.Fragment>
  );
};
