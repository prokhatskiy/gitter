import get from 'lodash-es/get';
import { ERROR } from '../types';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ERROR:
      if (get(action, 'error.response.status') === 401) {
        return {
          isLoggedIn: false
        }
      }

      return {
        ...get(action, 'error.response')
      };

    default:
      return state;
  }
}