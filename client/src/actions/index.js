import streams from '../apis/streams';
import {
  SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM
} from './types';

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
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
}

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data })
}

export const deleteStream = id => async dispatch => {
  // No response needed here because we are not getting a response from a deleted stream, so we can just send the request
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id})
}
