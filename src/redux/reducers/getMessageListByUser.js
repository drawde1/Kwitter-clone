import {GET_MESSAGE_LIST_USER,
  GET_MESSAGE_LIST_USER_FAIL,
  GET_MESSAGE_LIST_USER_LOAD,
  DELETE_MESSAGE} from '../actions'


const INITIAL_STATE = {
    loading: false,
    error: "",
    messages: [],
    count: 0,
  };


export const getMessageListByUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case GET_MESSAGE_LIST_USER_LOAD:
        return{
          ...INITIAL_STATE,
          loading: true,
        }
      case GET_MESSAGE_LIST_USER:
          const {messages,count} = action.payload
        
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

      case GET_MESSAGE_LIST_USER_FAIL:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default:
        return state;
    }
  };