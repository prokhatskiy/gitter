import get from 'lodash-es/get';

export default function reducer(state, action) {
  switch (action.type) {
    case 'LOAD:USER':
      return {
        ...state,
        user: { status: 'load' }
      };

    case 'LOAD:ROOMS':
      return {
        ...state,
        rooms: { status: 'load' }
      };

    case 'LOAD:MESSAGES':
      return {
        ...state,
        messages: { ...state.messages, status: 'load' }
      };

    case 'FETCHED:USER':
      return {
        ...state,
        user: { ...action.payload.data[0], status: 'fetched' }
      };

    case 'FETCHED:ROOMS':
      return {
        ...state,
        rooms: { items: [...action.payload.data], status: 'fetched' }
      };

    case 'FETCHED:MESSAGES':
      return {
        ...state,
        messages: { items: [...action.payload.data], status: 'fetched' }
      };

    case 'APPEND:MESSAGES':
      return {
        ...state,
        messages: { items: [...state.messages.items, ...action.payload.data], status: 'fetched' }
      };

    case 'ERROR':
      if (get(action, 'error.response.status') === 401) {
        return {
          auth: {
            isLoggedIn: false
          }
        }
      }

      return {
        ...state,
        error: { ...action.error }
      };

    default:
      return state;
  }
}