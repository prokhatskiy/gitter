import { USER } from '../types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case USER.LOAD:
      return {
        status: 'load'
      };

    case USER.FETCHED:
      return {
        ...action.payload.data[0], status: 'fetched'
      };

    default:
      return state;
  }
}