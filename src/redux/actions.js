import http from 'Utils/http';
import { API } from 'Utils/constants';

export function fetchUser() {
  return {
    types: ['LOAD:USER', 'FETCHED:USER', 'ERROR'],
    payload: {
      request:{
        url: API.USER
      }
    }
  }
}

export function fetchRooms() {
  return {
    types: ['LOAD:ROOMS', 'FETCHED:ROOMS', 'ERROR'],
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
      'LOAD:MESSAGES',
       beforeMessageId ? 'APPEND:MESSAGES' : 'FETCHED:MESSAGES',
      'ERROR'
    ],
    payload: {
      request:{
        url: `${API.MESSAGES}/${roomId}`
      }
    }
  }
}

export function postMessage(roomId, text) {
  // this action has no reaction in store, dispatch is unused
  return function() {
    return http.post(`${API.MESSAGES}/${roomId}`, { text })
  }
}