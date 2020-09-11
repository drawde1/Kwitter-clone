import {
  GET_MESSAGE_LIST,
  GET_MESSAGE_LIST_LOAD,
  GET_MESSAGE_LIST_FAIL,
  DELETE_MESSAGE,
  DELETE_MESSAGE_LOAD,
  DELETE_MESSAGE_FAIL,

} from '../actions'



const INITIAL_STATE = {
    loading: false,
    error: "",
    messages: [],
    count: 0,

  };


export const getMessageListReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case GET_MESSAGE_LIST_LOAD:
        return{
          ...INITIAL_STATE,
          loading: true,
        }
        case DELETE_MESSAGE_LOAD:
        return{
          ...INITIAL_STATE,
          loading: true,
        }
      case GET_MESSAGE_LIST:
          const {messages, count} = action.payload
        
        return {
          ...INITIAL_STATE,
          loading: false,
          messages: messages,
          count: count,
        };
        case DELETE_MESSAGE:
          const {id} = action.payload
        //   let newMessages = []
        //   INITIAL_STATE.messages.forEach((message) => {
        //       if(message.id !== id)
        //       {
        //           newMessages.push(message)
        //       }
        //     })

        return {
          ...INITIAL_STATE,
          loading: false,
          
          
        };

      case GET_MESSAGE_LIST_FAIL:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
        case DELETE_MESSAGE_FAIL:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default:
        return state;
    }
  };