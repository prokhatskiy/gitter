export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD:USER':
      return {
        status: 'load'
      };

    case 'FETCHED:USER':
      return {
        ...action.payload.data[0], status: 'fetched'
      };

    default:
      return state;
  }
}