const request = require('request-promise');

const gitterHost = 'https://gitter.im';

const Path = {
  currentUser: () => 'user',
  rooms: () => 'rooms',
  message: (roomId) => `rooms/${roomId}/chatMessages`
};

function getApiPath(path, ...rest) {
  return `/api/v1/${path(...rest)}`
}

const gitter = {
  host: gitterHost,
  fetch: function(path, token, opts) {
    const options = {
      url: gitterHost + path,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      qs: opts
    };

    return request(options);
  },

  fetchCurrentUser: function(token) {
    return this.fetch(getApiPath(Path.currentUser), token);
  },

  fetchRooms: function (token) {
    return this.fetch(getApiPath(Path.rooms), token);
  },

  fetchMessages: function (token, roomId, opts) {
    return this.fetch(getApiPath(Path.message, roomId), token, opts);
  }
};

module.exports = gitter;