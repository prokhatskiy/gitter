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
  request: function(path, token, params) {
    const options = {
      url: gitterHost + path,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true,
      ...params
    };

    return request(options);
  },

  fetchCurrentUser: function(token) {
    return this.request(getApiPath(Path.currentUser), token);
  },

  fetchRooms: function (token) {
    return this.request(getApiPath(Path.rooms), token);
  },

  fetchMessages: function (token, roomId, opts) {
    return this.request(getApiPath(Path.message, roomId), token, opts);
  },

  postMessages: function (token, roomId, text) {
    return this.request(getApiPath(Path.message, roomId), token, {
      method: 'POST',
      body: {
        text
      }
    });
  }
};

module.exports = gitter;