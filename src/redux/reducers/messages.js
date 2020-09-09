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
        
        export /**
         * @param {{ type: any; payload: any; }} action
         */
 const deleteMessageReducer = (state = { ...INITIAL_STATE }, action) => {
          switch (action.type) {

            case DELETE_MESSAGE:
              return {
                ...INITIAL_STATE,
                deleteMessageReducer
              };
            case FAILURE:
              return {
                ...INITIAL_STATE,
                error: action.payload,
                loading: false,
              };
      
            default:
              return state;
          };