import get from 'lodash-es/get';

export function getAuthStatus(state) {
  return {
    isLoggedIn: get(state, 'auth.isLoggedIn', true)
  };
}

export function getUser(state) {
  return {
    user: state.user || {}
  };
}

export function getRooms(state) {
  return {
    rooms: get(state, 'rooms.items', []),
    status: get(state, 'rooms.status')
  }
}

export function getMessages(state) {
  return {
    messages: get(state, 'messages.items', []),
    status: get(state, 'messages.status')
  }
}
