import api from '../../utils/api'
import {FAILURE} from './defaultuser'

export const ADD_MESSAGE= 'ADD_MESSAGE'

export const addMessage= (text) => async (dispatch, getState) => {
    try {
      
      const payload = await api.addMessage(text);
        
      dispatch({ type: ADD_MESSAGE, payload });
    } catch (err) {
      dispatch({
        type: FAILURE,
        payload: err.message,
      });
    }
  };