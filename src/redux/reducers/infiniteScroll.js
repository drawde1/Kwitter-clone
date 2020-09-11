import {ADD_TO_LIST,RESET_LIST} from '../actions/infiniteScroll'

const INITIAL_STATE = {
  
   limit: 10,
   offset: 0,
  };


export const infiniteScrollReducer = (state = {...INITIAL_STATE},action) =>
{
    switch (action.type) {
        case ADD_TO_LIST:
          return {
            ...INITIAL_STATE,
            offset: state.offset + action.payload
          };
          case RESET_LIST:
              return{
                ...INITIAL_STATE,
                offset: action.payload
              }
        default:
        return state
    }
}