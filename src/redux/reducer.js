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
    case 'ERROR':
      return {
        ...state,
        error: { ...action.error }
      };
    default:
      return state;
  }
}