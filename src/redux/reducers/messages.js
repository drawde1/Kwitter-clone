// TODO: implement
import {ADD_MESSAGE, DELETE_MESSAGE, FAILURE} from '../actions'
const INITIAL_STATE = {
    id: 0,
    text:'',
    username: '',
    createdAT:'',
    likes:[],
    loading: false,
    error: ''
  };


export const addMessageReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      
      case ADD_MESSAGE:
        const {id, text, username, createdAT, likes } = action.payload.message;
        return {
          ...INITIAL_STATE,
          id,
          text,
          username,
          createdAT,
          likes,
          loading: false

        };
        
       
        const deleteMessageReducer = (state = [], action) => {
          switch (action.type) {
            case DELETE_MESSAGE:
              return [
                ...state,
                {
                  text: action.text,
                  completed: false
                }
              ]

            case FAILURE:
              return {
                ...INITIAL_STATE,
                error: action.payload,
                loading: false,
              };
          }
          export default deleteMessageReducer;