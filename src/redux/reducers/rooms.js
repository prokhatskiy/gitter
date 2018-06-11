export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD:ROOMS':
      return {
        status: 'load'
      };

    case 'FETCHED:ROOMS':
      return {
        items: [...action.payload.data], status: 'fetched'
      };

    default:
      return state;
  }
}