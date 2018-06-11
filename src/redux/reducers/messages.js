export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD:MESSAGES':
      return {
        ...state.messages, status: 'load'
      };

    case 'FETCHED:MESSAGES':
      return {
        items: [...action.payload.data], status: 'fetched'
      };

    case 'APPEND:MESSAGES':
      return {
        items: [...state.messages.items, ...action.payload.data], status: 'fetched'
      };

    default:
      return state;
  }
}