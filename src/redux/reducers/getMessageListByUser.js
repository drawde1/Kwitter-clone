import {GET_MESSAGE_LIST_USER,FAILURE,LOAD,DELETE_MESSAGE} from '../actions'


const INITIAL_STATE = {
    loading: false,
    error: "",
    messages: []

  };


export const getMessageListByUserReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case LOAD:
        return{
          ...INITIAL_STATE,
          loading: true,
        }
      case GET_MESSAGE_LIST_USER:
          const {messages} = action.payload
        
        return {
          ...INITIAL_STATE,
          loading: false,
          messages: messages,
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

      case FAILURE:
        return {
          ...INITIAL_STATE,
          error: action.payload,
          loading: false,
        };
      
      default:
        return state;
    }
  };