import { ROOMS } from '../types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ROOMS.LOAD:
      return {
        status: 'load'
      };

    case ROOMS.FETCHED:
      return {
        items: [...action.payload.data], status: 'fetched'
      };

    default:
      return state;
  }
}