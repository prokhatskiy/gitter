import { API } from 'Utils/constants';

const types = ['LOAD','SUCCESS','ERROR'];

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

export function fetchMessages() {
  return {
    types: ['LOAD:MESSAGES', 'FETCHED:MESSAGES', 'ERROR'],
    payload: {
      request:{
        url: API.MESSAGES
      }
    }
  }
}