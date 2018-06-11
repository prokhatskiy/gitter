import http from 'Utils/http';
import { API } from 'Utils/constants';
import { USER, MESSAGES, ERROR, ROOMS } from './types';

export function fetchUser() {
  return {
    types: [USER.LOAD, USER.FETCHED, ERROR],
    payload: {
      request:{
        url: API.USER
      }
    }
  }
}

export function fetchRooms() {
  return {
    types: [ROOMS.LOAD, ROOMS.FETCHED, ERROR],
    payload: {
      request:{
        url: API.ROOMS
      }
    }
  }
}

export function fetchMessages(roomId, beforeMessageId) {
  return {
    types: [
      MESSAGES.LOAD,
      beforeMessageId ? MESSAGES.APPEND : MESSAGES.FETCHED,
      ERROR
    ],
    payload: {
      request:{
        url: `${API.MESSAGES}/${roomId}`
      }
    }
  }
}


export function appendMessage(data) {
  console.log(data);
  return dispatch => (
    dispatch({
      type: MESSAGES.APPEND,
      payload: {
        data
      }
    })
  )
}

export function postMessage(roomId, text) {
  // this action has no reaction in store, dispatch is unused
  return function() {
    return http.post(`${API.MESSAGES}/${roomId}`, { text })
  }
}