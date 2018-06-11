import { MESSAGES } from '../types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case MESSAGES.LOAD:
      return {
        ...state.messages, status: 'load'
      };

    case MESSAGES.FETCHED:
      return {
        items: [...action.payload.data], status: 'fetched'
      };

    case MESSAGES.APPEND:
      return {
        items: [...state.messages.items, ...action.payload.data], status: 'fetched'
      };

    default:
      return state;
  }
}