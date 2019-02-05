import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

// This action creator will be called with a list of values that were entered into our form as an argument
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
}
